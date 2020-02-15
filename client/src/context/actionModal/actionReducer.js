  
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
        console.log(state.baseSets[parseInt(action.payload.name)])
            return {
                ...state,
                repValue: action.payload.newRepValue,
                baseSets: state.weightSelection
                    ? (
                        [
                            ...state.baseSets,
                            ...state.baseSets[parseInt(action.payload.name)].push(state.weightValue)
                        ]
                    ) : (
                        [
                            ...state.baseSets,
                            state.baseSets[parseInt(action.payload.name)] = action.payload.newRepValue
                        ]
                            
                    )
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
