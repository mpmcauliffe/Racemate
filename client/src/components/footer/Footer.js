import React from 'react'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
import { FooterContainer, FooterIcon, } from './FooterComp'



export const Footer = ({ addButtonAction }) => {
    console.log(addButtonAction)
    
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

Footer.propTypes = {
    addButtonAction: PropTypes.string,
}
