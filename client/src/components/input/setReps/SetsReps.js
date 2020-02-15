import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetGauge } from './SetGauge'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { OpSwitch, } from '../..'


export const SetReps = () => {
    // CONTEXT .V.
    const { numberOfSets, optButtonsWeight, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateSetCount, updateWeightSelection, } = useContext(actionModalContext)

    // CONTEXT {O}
    // const {  } = useContext(actionModalContext)
    
    // useEffect(() => { }, [])
    // useEffect(() => { return () => { console.log('will unmount') }}, [])


    const handleToggleWeights = () => updateWeightSelection()


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
