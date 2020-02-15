import React, { Fragment, useEffect, useContext,  } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { Accordion, } from '../..'


export const SetGauge = () => {
    // CONTEXT .V.
    const { numberOfSets, rangeValue, weightSelection, baseValue, weightValue, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateRange, createInitialObject, updateWeightActual } = useContext(actionModalContext)

    // CONTEXT {O}
    const { baseObject, } = useContext(actionModalContext)

    useEffect(() => { if (Object.entries(baseObject).length === 0) { createInitialObject() } }, [])

    console.log(baseObject)
       
    const handleRangeChange = e => updateRange(e.target.value)

    const updateRep = e => {
        updateWeightActual([e.target.name], e.target.value)
        //console.log([e.target.name], e.target.value)
    }
    

    return (
        <Fragment>
            {numberOfSets && Object.keys(baseObject).map((key, i) => (
                <Accordion 
                    key={key}
                    name={key.replace('_', ' ')} 
                    internal>

                    <SetContainer short>
                        <UpdateText>{rangeValue} reps</UpdateText>
                        <input 
                            value={rangeValue}
                            onChange={handleRangeChange}
                            type='range' 
                            name='repMeter' 
                            min={4} 
                            max={50}
                            style={{ flexBasis: '100%' }} />
                        {Array.isArray(baseObject[Object.keys(baseObject)[0]]) && weightSelection 
                            ?  ( 
                                baseObject[key].map((rep, j) => (
                                    <RepInput 
                                        key={`${key}_${i}-${j}`}
                                        value={baseObject[key][j]}
                                        onChange={updateRep}
                                        name={`${key}-${j}`}
                                        max='9999' 
                                        step='1' />
                                ))
                            ) : (null)
                        } 
                        
                    </SetContainer>
                </Accordion>
            ))}
            
        </Fragment>
    )
}
//`${key}_${i}-${j}`      >> KEY
//`weightInput_${i}-${j}` >> NAME
