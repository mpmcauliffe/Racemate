
import React, { Fragment, useEffect, useContext,  } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { Accordion, } from '../..'


export const SetGauge = () => {
    // CONTEXT .V.
    const { numberOfSets, repValue, weightSelection, } = useContext(actionModalContext)
    
    // CONTEXT (F)
    const { updateRange, changeToWeightless, } = useContext(actionModalContext)

    // CONTEXT {O}
    const { baseSets, } = useContext(actionModalContext)

    useEffect(() => { changeToWeightless() }, [])

console.log(baseSets)

    const updateRep = e => console.log(e.target)
    
    return (
        <Fragment>
            {numberOfSets && baseSets.map((holder, i) => (
                <Accordion 
                    key={i} /* NOT RECOMMENDED KEY - uuid.v4() leads to unpredictable behavior */
                    name={`Set ${i+1}`} 
                    internal>

                    <SetContainer short>
                        <UpdateText>{repValue} reps</UpdateText>
                        <input 
                            value={repValue}
                            onChange={updateRange}
                            type='range' 
                            min={4} 
                            max={50}
                            style={{ flexBasis: '100%' }} />

                        {/***** *****/}
                        {weightSelection && baseSets[i].map((rep, j) => (
                            <RepInput 
                                key={`${i}-${j}`} 
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
//`${key}_${i}-${j}`      >> KEY
//`weightInput_${i}-${j}` >> NAME
