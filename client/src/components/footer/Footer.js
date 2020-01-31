import React from 'react'
import PropTypes from 'prop-types'
import { useQuery, } from '@apollo/react-hooks'
import { Link as ScrollLink } from 'react-scroll'
import { FooterContainer, FooterIcon, } from './FooterComp'
import { GET_TOGGLE_STATUS } from '../../graphql'



export const Footer = ({ addButtonAction }) => {
    
    const { loading, data } = useQuery(GET_TOGGLE_STATUS)

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
            {data && <div>{data.userSelection}</div>}
            <FooterIcon className='fas fa-plus' />   
        </FooterContainer>
    )
}

Footer.propTypes = {
    addButtonAction: PropTypes.string,
}

/**
 * make multiple calls to an apollo hook
 * const { data: dataR, error: errorR, loading: landingR } = useQuery(GET_RESTAURANTS);
 * const { data, error, loading } = useQuery(GET_DAILY_MENU);
 */