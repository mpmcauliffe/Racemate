import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetGauge } from './SetGauge'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { SpoolInput, } from '../'
import { OpSwitch, } from '../..'


export const SetReps = () => {
    // CONTEXT .V.
    const { numberOfSets, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateSetCount, updateWeightSelection, changeToWeightless, 
        changeToWeightedArray, } = useContext(actionModalContext)

    // CONTEXT {O}
    const { optButtonsWeight, spoolInputArray, } = useContext(actionModalContext)
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
                    {window.innerWidth > 768 
                        ?   <RepInput 
                                value={numberOfSets}
                                onChange={updateSetCount}
                                type='number'
                                step='1' />
                        :   <SpoolInput
                                actualValue={numberOfSets}
                                options={spoolInputArray}
                                updateSelect={updateSetCount}
                                style={{ flexBasis: '50%' }}  />
                    }
                    
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
