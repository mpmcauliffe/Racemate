  
import { _setNumberOfSets_, _setWeightSelection_,
    _setRange_, _changeToWeightedArray_, _changeToWeightless_, 
    _updateWeightInput_, _optionUpdateRepsCount_, } from './types'


export default (state, action) => {
    switch (action.type) {
        case _setNumberOfSets_:
            return { //[...a, ...[...Array(2)].map(emptySet => { return [...Array(2).fill(8)] })]
                ...state,
                numberOfSets: action.payload > 0 ? action.payload : '1',
                baseSets: state.weightSelection 
                    ?   (
                            state.baseSets.length > action.payload 
                                ? state.baseSets.slice(0, action.payload)
                                : [
                                    ...state.baseSets, 
                                    ...[...Array(action.payload - state.baseSets.length)]
                                            .map(set => { return [...Array(parseInt(state.repValue)).fill(state.weightValue)] })
                                ]
                    ) : (
                            state.baseSets.length > action.payload
                                ? state.baseSets.slice(0, action.payload)
                                : [
                                    ...state.baseSets, 
                                    ...Array(action.payload - state.baseSets.length).fill(state.repValue)
                                ]
                        )
            }

        case _setWeightSelection_: 
            return {
                ...state,
                weightSelection: !state.weightSelection,
            }
        
        case _setRange_: 
            const { name, newRepValue } = action.payload

            return {
                ...state,
                repValue: newRepValue,

                changeOption: !state.weightSelection
                    ? state.changeOption.map((item, i) => parseInt(name) === i ? true : item)
                    : state.changeOption,

                baseSets: state.weightSelection
                    ?   (
                            newRepValue > state.baseSets[name].length
                                ? state.baseSets
                                    .map((set, i) => parseInt(name) === i 
                                        ?   [...state.baseSets[parseInt(name)], 
                                                ...Array(parseInt(newRepValue) 
                                                    - state.baseSets[parseInt(name)].length)
                                                .fill(state.weightValue)] 
                                        :   set
                                    )                       
                                : state.baseSets
                                    .map((set, i) => parseInt(name) === i 
                                        ?   set.slice(0, newRepValue) 
                                        :   set
                                    )                                
                        )  
                    : state.baseSets.map((rep, i) => parseInt(name) === i ? newRepValue : rep)                                                  
                    
            }

        case _updateWeightInput_:
            const { xCoord, yCoord, newWeightValue } = action.payload

            return {
                ...state,

                changeOption: state.weightSelection
                    ? state.changeOption.map((item, i) => yCoord === i ? true : item)
                    : state.changeOption,

                baseSets: [
                    ...state.baseSets.map((set, i) => yCoord === i 
                        ? set.map((rep, j) => xCoord === j ? rep = newWeightValue : rep)
                        : set
                    )
                ]
            }

        case _changeToWeightedArray_:
            return {
                ...state,
                changeOption: [...Array(4)].map(() => false),
                baseSets: [...Array(parseInt(state.numberOfSets))]
                            .map(set => { return [...Array(parseInt(state.repValue)).fill(state.weightValue)] })
            }
        
        case  _changeToWeightless_:
            return {
                ...state,
                changeOption: [...Array(4)].map(() => false),
                baseSets: [...Array(parseInt(state.numberOfSets)).fill(state.repValue)]
            }


        default:
            return state
    }
}
