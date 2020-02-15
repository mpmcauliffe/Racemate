import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetGauge } from './SetGauge'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { OpSwitch, } from '../..'


export const SetReps = () => {
    // CONTEXT .V.
    const { numberOfSets, optButtonsWeight, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateSetCount, updateWeightSelection, changeToWeightless, 
        changeToWeightedArray, } = useContext(actionModalContext)

    // CONTEXT {O}
    // const {  } = useContext(actionModalContext)
    // useEffect(() => { return () => { console.log('will unmount') }}, [])


    const handleToggleWeights = buttonName => {
        updateWeightSelection()

        if (buttonName === 'yes') {
            changeToWeightedArray()
        } else {
            changeToWeightless()
        }
    }


    return (
            <form>
                <SetContainer>
                    <p>How many sets?</p>
                    <RepInput 
                        value={numberOfSets}
                        onChange={updateSetCount}
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
