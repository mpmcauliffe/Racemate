
import React, { Fragment, useEffect, useContext,  } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetContainer, InternalContainer, RepInput,  UpdateText, OptionText, } from '../inputComp'
import { SpoolInput, } from '../'
import { Accordion, } from '../..'


export const SetGauge = () => {
    // CONTEXT .V.
    const { numberOfSets, repValue, weightSelection, currentWeight, } = useContext(actionModalContext)
    
    // CONTEXT (F)
    const { updateRange, changeToWeightless, updateWeightInput, 
        triggerOptionReps, } = useContext(actionModalContext)

    // CONTEXT [A] {O}
    const { baseSets, spoolInputArray, changeOptionReps, 
        changeOptionWeight, } = useContext(actionModalContext)

    useEffect(() => { changeToWeightless() }, [])

    //console.log(changeOptionWeight)
    const handleRangeChange = e => updateRange(e.target.name, e.target.value)

    const updateRep = e => updateWeightInput(e.target.name, e.target.value)
    
    const handleOptionRepsClick = e => triggerOptionReps(e.target.getAttribute('name'))


    return (
        <Fragment>
            {numberOfSets && baseSets.map((set, i) => (
                <Accordion 
                    key={i} /* NOT RECOMMENDED KEY - uuid.v4() leads to unpredictable behavior */
                    name={`Set ${i+1}`} 
                    internal>

                    <SetContainer short>
                        <InternalContainer>
                            <UpdateText style={{ flexBasis: '50%' }}>Number of reps</UpdateText>
                            
                            {window.innerWidth > 768 
                                ?   <RepInput 
                                        value={Array.isArray(set) ? set.length : baseSets[i]}
                                        onChange={handleRangeChange}
                                        name={i}
                                        type='number' 
                                        //step='1' 
                                        counter
                                        style={{ flexBasis: '50%' }}  />
                                :   <SpoolInput
                                        actualValue={Array.isArray(set) ? set.length : baseSets[i]}
                                        options={spoolInputArray}
                                        updateSelect={handleRangeChange}
                                        name={i.toString()}
                                        counter
                                        style={{ flexBasis: '50%' }}  />
                            }
                        </InternalContainer>
                        {changeOptionReps[i] &&  
                               <OptionText
                                    name={i}
                                    onClick={handleOptionRepsClick}
                                >   Change upcoming sets to {Array.isArray(set) ? set.length : baseSets[i]} reps?
                                </OptionText>                           
                        }
                        
                        {/*** ***/}
                        {weightSelection &&  <UpdateText 
                                    style={{ flexBasis: '100%', textAlign: 'center' }}>
                                        Weight quantity per rep
                                    </UpdateText> 
                        }
                        {changeOptionWeight[i] &&
                            <OptionText
                            >   Change upcoming reps in THIS set to {currentWeight}?
                            </OptionText>
                        }
                        {weightSelection && baseSets[i].map((rep, j) => (  
                            <RepInput 
                                key={`${i}-${j}`} 
                                value={baseSets[i][j]}
                                onChange={updateRep}
                                name={`weightInput_${i}-${j}`}
                                step='1' />
                        ))}
                        {changeOptionWeight[i] &&
                            <OptionText
                            >   Change upcoming reps in ALL sets to {currentWeight}?
                            </OptionText>
                        }
                    </SetContainer>
                </Accordion>
            ))}
        </Fragment>
    )
}
//`${key}_${i}-${j}`      >> KEY
//`weightInput_${i}-${j}` >> NAME
