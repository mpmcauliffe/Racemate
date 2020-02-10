import React, { Fragment, useState, useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, } from '../inputComp'
import { OpSwitch, Accordion, } from '../..'


export const SetGauge = () => {

    const actionContext                             = useContext(actionModalContext)
    const { updateRepSelection, repRange, }                       = actionContext

    const [setCount, changeSetCount]                = useState('4')

    const [repSelection, setRepSelection]           = useState('low')
    const optButtonsReps                            = ['low', 'medium', 'high']

    const [weightSelection, setWeightSelection]     = useState(false)
    const optButtonsWeight                          = ['no', 'yes']


    useEffect(() => { 
        if (weightSelection) {
            console.log(setCount, repSelection, weightSelection)
        }
    }, [repSelection, weightSelection, setCount])

    const handleSetChange = e => changeSetCount(e.target.value)
    

    const handleToggle = buttonName => {
        setRepSelection(buttonName)
        updateRepSelection(optButtonsReps.indexOf(buttonName))
    }

    const handleToggleWeights = () => setWeightSelection(!weightSelection)

    //const handleWeightInputChange = () => 
    //const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })


    return (
        <Fragment>
            <form>
                <SetContainer>
                    <p>How many sets?</p>
                    <RepInput 
                        value={setCount}
                        onChange={handleSetChange}
                        name='numRepsInput'
                        max='100'
                        min='1' 
                        step='1' />
                </SetContainer>

                <SetContainer>
                    <p>Rep Magnitude</p>
                    <OpSwitch 
                        optButtons={optButtonsReps}
                        handleToggle={handleToggle} />     
                    <p info>between {repRange} reps</p>                         
                </SetContainer>

                <SetContainer>
                    <p>Does this exercise require weights?</p>
                    <OpSwitch 
                        optButtons={optButtonsWeight}
                        handleToggle={handleToggleWeights} />
                </SetContainer>

                {setCount && [...Array(parseInt(setCount))].map((_, i) => (
                    <Accordion 
                        key={i}
                        name={`Set ${i+1}`} 
                        internal >
                        <SetContainer>
                            <input 
                                type='range' 
                                name='repMeter' 
                                min={repRange.split('-')[0]} 
                                max={repRange.split('-')[1]} />

                            {weightSelection && [...Array(8)].map((_, i) => (
                                <RepInput 
                                    key={i}
                                    value='30'
                                    //onChange={handleWeightInputChange}
                                    name={'weightInput-${i}'}
                                    max='9999' 
                                    step='1'
                                    readOnly />
                            ))}
                        </SetContainer>
                    </Accordion>
                ))}
                
            </form>
            
        </Fragment>
        
    )
}

// <Accordion name='Set 1' internal>
//                     <SetContainer>
                        
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                        
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />                   
//                     </SetContainer>
//                 </Accordion>
//                 <Accordion name='Set 1' internal>
//                     <SetContainer>
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                        
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
//                     </SetContainer>
//                 </Accordion>
//                 <Accordion name='Set 1' internal>
//                     <SetContainer>
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                        
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
//                     </SetContainer>
//                 </Accordion>
//                 <Accordion name='Set 1' internal>
//                     <SetContainer>
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                        
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />

//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='2000' />
                    
//                         <RepInput 
//                             max='100' 
//                             step='10' 
//                             value='30' />
//                     </SetContainer>
//                 </Accordion>