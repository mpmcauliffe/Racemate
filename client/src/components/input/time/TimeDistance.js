import React, { useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetContainer, InternalContainer, RepInput,  UpdateText, OptionText, } from '../inputComp'
import { SpoolInput, } from '../'
import { OpSwitch, Accordion, InfoIcon, } from '../..'
//import { ModalCloseButton } from '../../modal/ModalComp'
import { InfoText } from '../../forms/FormComp'


export const TimeDistance = () => {
    const { hoursMinutes, changeOptionBin, isDistanceExercise,
        optBtnDistanceUnit, } = useContext(actionModalContext)

    const { updateDistanceTrigger, } = useContext(actionModalContext)

    const updateHours = e => console.log(e.target.value)

    //const handleToggleDistance = buttonName => console.log(buttonName)

    return (
        <form>
        
            <SetContainer>
                
                <UpdateText style={{ flexBasis: '25%' }}>Hours</UpdateText>
                <SpoolInput
                    //actualValue={numberOfSets}
                    options={hoursMinutes.slice(0, 7)}
                    updateSelect={updateHours}
                    style={{ flexBasis: '25%' }}  />
                <UpdateText style={{ flexBasis: '25%' }}>Minutes</UpdateText>
                <SpoolInput
                    //actualValue={numberOfSets}
                    options={hoursMinutes}
                    updateSelect={updateHours}
                    style={{ flexBasis: '25%' }}  /> 
                    
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
                                counter
                                style={{ flexBasis: '50%' }}  />
                        </InternalContainer>
                        <InfoIcon className='fas fa-clock' style={{ alignSelf: 'flexEnd' }} />

                    </SetContainer>
                    
                }
            
        </form>
    )
}
