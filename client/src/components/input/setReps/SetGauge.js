import React, { Fragment, useEffect, useContext,  } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { Accordion, } from '../..'


export const SetGauge = () => {
    // CONTEXT .V.
    const { numberOfSets, baseSets, rangeValue, repRange, weightSelection, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateRange, createInitialObject, } = useContext(actionModalContext)

    // CONTEXT {O}
    const { baseObject, } = useContext(actionModalContext)

    useEffect(() => { if (Object.entries(baseObject).length === 0) { createInitialObject() } }, [])

    console.log(baseObject)
       
    const handleRangeChange = e => updateRange(e.target.value)

    const updateRep = e => console.log(e.target)
    
    // Object.keys(myObject).map(function(key, index) {
    //     myObject[key] *= 2;
    //   });

    return (
        <Fragment>
            {numberOfSets && Object.keys(baseObject).map((set, i) => (
                <Accordion 
                    key={set}
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
