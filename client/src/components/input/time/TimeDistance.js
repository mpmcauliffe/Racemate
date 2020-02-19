import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'

import { SetContainer, InternalContainer, RepInput,  UpdateText, OptionText, } from '../inputComp'
import { SpoolInput, } from '../'
import { OpSwitch, Accordion, InfoIcon, } from '../..'
import { InfoText } from '../../forms/FormComp'

import { extractTimeUnit, } from '../../../helpers'


export const TimeDistance = () => {
    const { hoursMinutes, changeOptionBin, isDistanceExercise,
        optBtnDistanceUnit, } = useContext(actionModalContext)

    const { updateDistanceTrigger, addTimeDisElement, updateTime, } = useContext(actionModalContext)

    const { timeDistanceArray, } = useContext(actionModalContext)

    useEffect(() => { addTimeDisElement() }, [])

    console.log(timeDistanceArray)
    const updateHours = e => console.log(e.target.name, e.target.value)

    //const handleToggleDistance = buttonName => console.log(buttonName)

    return (
        <form>
        
            <SetContainer>
                    {timeDistanceArray.length > 0 &&
                        <InternalContainer>
                            <UpdateText style={{ flexBasis: '20%' }}>Hours</UpdateText>
                            <SpoolInput
                                actualValue={extractTimeUnit(timeDistanceArray[0].time, 'hrs')}
                                options={hoursMinutes.slice(0, 9)}
                                updateSelect={(e) => updateTime(e.target.name, e.target.value)}
                                name='hrs_0_T'
                                style={{ flexBasis: '30%' }}  />
                            

                            <UpdateText style={{ flexBasis: '20%' }}>Minutes</UpdateText>
                            <SpoolInput
                                actualValue={extractTimeUnit(timeDistanceArray[0].time, 'min')}
                                options={hoursMinutes}
                                updateSelect={(e) => updateTime(e.target.name, e.target.value)}
                                name='min_0_T'
                                style={{ flexBasis: '30%' }} /> 
                        </InternalContainer>    
                    }
                
                
                    
                {/*****<Accordion 
                    name={'Time only'} 
                    internal>

                    <InternalContainer> *****/}
            </SetContainer>         
            
            <SetContainer>
                <UpdateText>Do you want to input distance?</UpdateText>
                <OpSwitch 
                        optButtons={changeOptionBin}
                        handleToggle={updateDistanceTrigger} />
            </SetContainer>

                {isDistanceExercise &&
                    <SetContainer>
                        <InternalContainer style={{ flexDirection: 'column' }}>
                            <UpdateText>Select a distance unit</UpdateText>
                            <OpSwitch 
                                optButtons={optBtnDistanceUnit}
                                handleToggle={updateDistanceTrigger} />
                        </InternalContainer>

                        <InternalContainer>
                            <UpdateText style={{ flexBasis: '50%' }}>Distance</UpdateText>
                            <RepInput 
                                value={'0'}
                                //onChange={handleRangeChange}
                                //name={i}
                                type='number' 
                                style={{ flexBasis: '50%' }}  />
                        </InternalContainer>
                        <InfoIcon className='fas fa-clock' style={{ fontSize: '5rem' }} />

                    </SetContainer>
                    
                }
            
        </form>
    )
}
