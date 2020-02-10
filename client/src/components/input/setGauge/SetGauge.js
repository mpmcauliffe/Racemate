import React, { Fragment, useState, useEffect, } from 'react'
import { RepInput, SetContainer, } from '../inputComp'
import { OpSwitch, Accordion, } from '../..'


export const SetGauge = () => {

    //const [rules, setRules]

    const [repSelection, setRepSelection]           = useState('low')
    const optButtonsReps                            = ['low', 'medium', 'high']

    const [weightSelection, setWeightSelection]     = useState('no')
    const optButtonsWeight                          = ['no', 'yes']

    useEffect(() => {
        
    }, [repSelection, weightSelection])

    //const onChange = e => setRepSelection({ ...user, [e.target.name]: e.target.value })

    const handleToggle = buttonName => {
        setRepSelection(buttonName)
        setWeightSelection(buttonName)
    }


    return (
        <Fragment>
            <form>
                <SetContainer>
                    <p>How many sets?</p>
                    <RepInput 
                        name='numRepsInput'
                        max='100' 
                        step='1' 
                        value='4' />
                </SetContainer>

                <SetContainer>
                    <p>Rep Magnitude</p>
                    <OpSwitch 
                        optButtons={optButtonsReps}
                        handleToggle={handleToggle} />                              
                </SetContainer>

                <SetContainer>
                    <p>Does this exercise require weights?</p>
                    <OpSwitch 
                        optButtons={optButtonsWeight}
                        handleToggle={handleToggle} />
                </SetContainer>

                <Accordion name='Set 1' internal>
                    <SetContainer>
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                        
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />                   
                    </SetContainer>
                </Accordion>
                <Accordion name='Set 1' internal>
                    <SetContainer>
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                        
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    </SetContainer>
                </Accordion>
                <Accordion name='Set 1' internal>
                    <SetContainer>
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                        
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    </SetContainer>
                </Accordion>
                <Accordion name='Set 1' internal>
                    <SetContainer>
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                        
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />

                        <RepInput 
                            max='100' 
                            step='10' 
                            value='2000' />
                    
                        <RepInput 
                            max='100' 
                            step='10' 
                            value='30' />
                    </SetContainer>
                </Accordion>
            </form>
            
        </Fragment>
        
    )
}
