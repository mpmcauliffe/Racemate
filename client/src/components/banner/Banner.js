import React, { useState, useEffect, } from 'react'
import { StripContainer, StripImg, } from './BannerComp'


export const Banner = () => {
    const [strip, setStrip] = useState([ ])

    useEffect(() => {
        //setStrip(window.innerWidth > 480 ? Array(8).fill(0) : Array(4).fill(0))
        setStrip(window.innerWidth > 480 ? Array(8).fill(0): Array(4).fill(0))

    }, [])
    

    return (
        <StripContainer>
            {strip.map((item, index) => (
                <StripImg
                    key={index}
                    src={require(`./img/${index+1}.png`)} />
            ))}
        </StripContainer>
    )
}
