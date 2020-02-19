import React, { Fragment, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'

import { SetContainer, InternalContainer, RepInput,  UpdateText, OptionText, } from '../inputComp'
import { SpoolInput, } from '../'
import { InfoIcon, } from '../..'
import { InfoText } from '../../forms/FormComp'

import { extractTimeUnit, } from '../../../helpers'


export const TimeDistanceMod = props => {
    const { hoursMinutes, changeOptionBin, isDistanceExercise,
        optBtnDistanceUnit, } = useContext(actionModalContext)

    const { updateDistanceTrigger, addTimeDisElement, updateTime, } = useContext(actionModalContext)

    const { timeDistanceArray, } = useContext(actionModalContext)

    return (
        <Fragment> 
            {comp2 &&
                <InternalContainer>
                    <UpdateText style={{ flexBasis: '50%' }}>Distance</UpdateText>
                    <RepInput 
                        value={'0'}
                        //onChange={handleRangeChange}
                        name={`${props.disTag}_${props.name}_D`}
                        type='number' 
                        style={{ flexBasis: '50%' }}  />
                </InternalContainer>
            }
            

            <InternalContainer>
                <UpdateText style={{ flexBasis: '20%' }}>Hours</UpdateText>
                <SpoolInput
                    actualValue={extractTimeUnit(timeDistanceArray[0].time, 'hrs')}
                    options={hoursMinutes.slice(0, 9)}
                    updateSelect={(e) => updateTime(e.target.name, e.target.value)}
                    name={`hrs_${props.name}_T`}
                    style={{ flexBasis: '30%' }}  />
                

                <UpdateText style={{ flexBasis: '20%' }}>Minutes</UpdateText>
                <SpoolInput
                    actualValue={extractTimeUnit(timeDistanceArray[0].time, 'min')}
                    options={hoursMinutes}
                    updateSelect={(e) => updateTime(e.target.name, e.target.value)}
                    name={`min_${props.name}_T`}
                    style={{ flexBasis: '30%' }} /> 
            </InternalContainer>
        </Fragment>
        
    )
}
