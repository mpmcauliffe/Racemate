import React, { Fragment, useState, useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { OpSwitch, Accordion, } from '../..'


export const SetGauge = () => {
    // There's a lot going on here. This component will allow a user to
    // decide how much they want to micromanage this portion of the app
    const { numberOfSets, updateSetCount, updateRepSelection, 
        repRange, optButtonsReps, optButtonsWeight, weightSelection, 
        updateWeightSelection, rangeValue, updateRange, createRepArray,
        baseSets, } = useContext(actionModalContext)

    //useEffect(() => { createRepArray(numberOfSets, rangeValue) }, [])
console.log(baseSets)
console.log(rangeValue)
    useEffect(() => { return () => { console.log('will unmount') }}, [])

    const handleToggle = buttonName => updateRepSelection(optButtonsReps.indexOf(buttonName))

    const handleToggleWeights = () => updateWeightSelection()

    const handleRangeChange = (e) => updateRange(e.target.value)


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

                {numberOfSets && baseSets.map((_, i) => (
                    <Accordion 
                        key={i+1}
                        name={`Set ${i+1}`} 
                        internal>

                        <SetContainer short>
                            <UpdateText>{rangeValue} reps</UpdateText>
                            <input 
                                value={rangeValue}
                                onChange={handleRangeChange}
                                type='range' 
                                name='repMeter' 
                                min={repRange.split('-')[0]} 
                                max={repRange.split('-')[1]}
                                style={{ flexBasis: '100%' }} />

                            {weightSelection && baseSets[i].map((rep, j) => (
                                <RepInput 
                                    key={j}
                                    value='30'
                                    //onChange={handleWeightInputChange}
                                    name={`weightInput_${i}-${j}`}
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
//[...Array(parseInt(numberOfSets))]