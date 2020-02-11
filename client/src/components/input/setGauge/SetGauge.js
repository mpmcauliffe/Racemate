import React, { Fragment, useState, useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { OpSwitch, Accordion, } from '../..'


export const SetGauge = () => {
    // There's a lot going on here. This component will allow a user to
    // decide how much they want to micromanage this portion of the app
    const { numberOfSets, updateSetCount, updateRepSelection, 
        repRange, optButtonsReps, optButtonsWeight, weightSelection, 
        updateWeightSelection, } = useContext(actionModalContext)

    const handleToggle = buttonName => updateRepSelection(optButtonsReps.indexOf(buttonName))

    const handleToggleWeights = () => updateWeightSelection()


    return (
        <Fragment>
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

                {numberOfSets && [...Array(parseInt(numberOfSets))].map((_, i) => (
                    <Accordion 
                        key={i}
                        name={`Set ${i+1}`} 
                        internal>
                        <SetContainer>
                            <input 
                                type='range' 
                                name='repMeter' 
                                min={repRange.split('-')[0]} 
                                max={repRange.split('-')[1]} />

                            {weightSelection && [...Array(8)].map((_, i) => (
                                <RepInput 
                                    key={i}
                                    value='30'
                                    //onChange={handleWeightInputChange}
                                    name={'weightInput-${i}'}
                                    max='9999' 
                                    step='1'
                                    readOnly />
                            ))}
                        </SetContainer>
                    </Accordion>
                ))}
                
            </form>
            
        </Fragment>
        
    )
}
