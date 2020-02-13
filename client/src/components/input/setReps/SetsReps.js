import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetGauge } from './SetGauge'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { OpSwitch, } from '../..'


export const SetReps = () => {
    // CONTEXT .V.
    const { numberOfSets,  repRange, optButtonsReps, optButtonsWeight,     
        baseObject, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateSetCount, updateRepSelection, updateWeightSelection, } = useContext(actionModalContext)

    // CONTEXT {O}
    const {  } = useContext(actionModalContext)

    
    useEffect(() => { 
        if (Object.entries(baseObject).length === 0) { console.log('AAAAA') }
        
    }, [])
  
    useEffect(() => { return () => { console.log('will unmount') }}, [])


    const handleToggle = buttonName => updateRepSelection(optButtonsReps.indexOf(buttonName))

    const handleToggleWeights = () => updateWeightSelection()


    return (

            <form>
                <SetContainer>
                    <p>How many sets?</p>
                    <RepInput 
                        value={numberOfSets}
                        onChange={updateSetCount}
                        name='numRepsInput'
                        max='100'
                        min='1' 
                        step='1' />
                </SetContainer>

                <SetContainer>
                    <p>Rep Magnitude</p>
                    <OpSwitch 
                        optButtons={optButtonsReps}
                        handleToggle={handleToggle} />     
                    <UpdateText>between {repRange} reps</UpdateText>                         
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