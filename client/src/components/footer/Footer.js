import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FooterContainer, FooterIcon, } from './FooterComp'



export const Footer = () => {
    return (
        <FooterContainer>
            <ScrollLink
                to='navHeader' 
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500} >

                <FooterIcon className='fas fa-chevron-up' />
            </ScrollLink>
            
            <FooterIcon className='fas fa-plus' />   
        </FooterContainer>
    )
}
