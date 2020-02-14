import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetGauge } from './SetGauge'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { OpSwitch, } from '../..'


export const SetReps = () => {
    // CONTEXT .V.
    const { numberOfSets, optButtonsWeight, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateSetCount, updateWeightSelection, changeObject, } = useContext(actionModalContext)

    // CONTEXT {O}
    // const {  } = useContext(actionModalContext)
  
    useEffect(() => { return () => { console.log('will unmount') }}, [])
    
    const handleToggleWeights = () => {
        updateWeightSelection()

        changeObject()
    }
    
    
    return (

            <form>
                <SetContainer>
                    <p>How many sets?</p>
                    <RepInput 
                        value={numberOfSets}
                        onChange={updateSetCount}
                        name='numRepsInput'
                        max={20}
                        min={1} 
                        step='1' />
                </SetContainer>
                
                <SetContainer>
                    <p>Does this exercise require weights?</p>
                    <OpSwitch 
                        optButtons={optButtonsWeight}
                        handleToggle={handleToggleWeights} />
                </SetContainer>

                <SetGauge />
            </form>
    )
}
//[...Array(parseInt(numberOfSets))] `${i}_${uuid.v4()}`