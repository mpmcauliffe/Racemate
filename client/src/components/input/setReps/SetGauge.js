import React, { Fragment, useEffect, useContext,  } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { Accordion, } from '../..'


export const SetGauge = () => {
    const { numberOfSets, baseSets, rangeValue, updateRange,
        repRange, weightSelection, } = useContext(actionModalContext)
       
    const handleRangeChange = e => updateRange(e.target.value)

    const updateRep = e => console.log(e.target)
    
    return (
        <Fragment>
            {numberOfSets && baseSets.map((holder, i) => (
                <Accordion 
                    key={i} /* NOT RECOMMENDED KEY - uuid.v4() leads to unpredictable behavior */
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
                                key={`${i}-${j}`} /* NOT RECOMMENDED KEY - uuid.v4() leads to unpredictable behavior */
                                value='30'
                                onChange={updateRep}
                                name={`weightInput_${i}-${j}`}
                                max='9999' 
                                step='1' />
                        ))}
                    </SetContainer>
                </Accordion>
            ))}
        </Fragment>
    )
}
