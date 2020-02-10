import React, { Fragment, useState, useEffect, } from 'react'
import { RepInput, SetContainer, RadioContainer, } from '../inputComp'
import { OpSwitch, } from '../..'


export const SetGauge = () => {

    //const [rules, setRules]

    const [repSelection, setRepSelection]           = useState('low')
    const optButtonsReps                            = ['low', 'medium', 'high']

    const [weightSelection, setWeightSelection]     = useState('no')
    const optButtonsWeight                          = ['no', 'yes']

    useEffect(() => {
        
    }, [repSelection, weightSelection])

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
                        max='100' 
                        step='1' 
                        value='4' />
                </SetContainer>

                <SetContainer>
                    <p>Rep Magnitude</p>
                    <OpSwitch 
                        optButtons={optButtonsReps}
                        handleToggle={handleToggle} />
                    {/** <RadioContainer>
                        <input type='radio' name='magnitude' value='low' checked /> low<br />
                        <input type='radio' name='magnitude' value='medium' /> medium<br />
                        <input type='radio' name='magnitude' value='high' /> high<br /><br />
                    </RadioContainer>**/}                    
                </SetContainer>

                <SetContainer>
                    <p>Does this exercise require weights?</p>
                    <OpSwitch 
                        optButtons={optButtonsWeight}
                        handleToggle={handleToggle} />
                    {/** <RadioContainer>
                        <input type='radio' name='magnitude' value='true' checked /> yes<br />
                        <input type='radio' name='magnitude' value='false' /> no<br />
                    </RadioContainer>  **/}     
                </SetContainer>

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
            </form>
            
        </Fragment>
        
    )
}
