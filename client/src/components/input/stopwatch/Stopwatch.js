import React, { useState, useEffect, } from 'react'
import { SWtext, BtnRound, } from './StopwatchComp'
import { SetContainer, InternalContainer, UpdateText, } from '../inputComp'
import { InfoIcon, } from '../..'


export const Stopwatch = () => {
    const [start, setStart] = useState(false)
    const [cen, setCen] = useState('00')
    const [sec, setSec] = useState('00')
    const [min, setMin] = useState('00')
    const [hrs, setHrs] = useState('00')

    const handleStartStop = () => setStart(!start)

    useEffect(() => {

    })

    return (
        <SetContainer>
            <SWtext>{hrs}:{min}:{sec}:{cen}</SWtext>

            <InternalContainer style={{ justifyContent: 'space-between' }}>
                <BtnRound
                style={{ marginLeft: '5%' }} >
                    {!start && <InfoIcon 
                        className="fas fa-reply" 
                        style={{ fontSize: '5rem' }} />}

                    {start && <InfoIcon 
                        className="fas fa-sync-alt" 
                        style={{ fontSize: '5rem' }} />}
                </BtnRound>

                <BtnRound 
                    onClick={handleStartStop}
                    style={{ marginRight: '5%' }} >
                    {!start && <InfoIcon 
                        className="fas fa-play"
                        style={{ fontSize: '5rem', marginLeft: '1rem' }}  />}
                    
                    {start && <InfoIcon 
                        className="fas fa-stop" 
                        style={{ fontSize: '5rem' }} />}
                </BtnRound>         
            </InternalContainer>
        </SetContainer>
    )
}
