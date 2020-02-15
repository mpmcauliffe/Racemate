  
import { _setNumberOfSets_, _setWeightSelection_,
    _setRange_, _changeToWeightedArray_, _changeToWeightless_, } from './types'


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
            return {
                ...state,
                repValue: action.payload.newRepValue,
                baseSets: state.weightSelection
                    ?   (
                            action.payload.newRepValue > state.baseSets[action.payload.name].length
                                ? state.baseSets
                                    .map((set, i) => parseInt(action.payload.name) === i 
                                        ? [...state.baseSets[i], ...Array(action.payload.newRepValue).fill(state.weightValue)] 
                                        : set
                                    )                       
                                : state.baseSets
                                    .map((set, i) => parseInt(action.payload.name) === i 
                                        ? set.slice(0, action.payload.newRepValue) 
                                        : set
                                    )                                
                        )  
                    : state.baseSets.map((rep, i) => parseInt(action.payload.name) === i ? action.payload.newRepValue : rep)                                                  
                    
            }

        case _changeToWeightedArray_:
            return {
                ...state,
                baseSets: [...Array(parseInt(state.numberOfSets))]
                            .map(set => { return [...Array(parseInt(state.repValue)).fill(state.weightValue)] })
            }
        
        case  _changeToWeightless_:
            return {
                ...state,
                baseSets: [...Array(parseInt(state.numberOfSets)).fill(state.repValue)]
            }


        default:
            return state
    }
}
