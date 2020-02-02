import React, { Fragment, } from 'react'
import { useQuery, } from '@apollo/react-hooks'
import { Link as ScrollLink } from 'react-scroll'
import { FooterContainer, FooterIcon, } from './FooterComp'
import { Modal, } from '../../components'
import { GET_TOGGLE_STATUS } from '../../graphql'



export const Footer = () => {
    const { data } = useQuery(GET_TOGGLE_STATUS)

    
    return (
        <Fragment>
            <FooterContainer>
                <ScrollLink
                    to='navHeader' 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500} >

                    <FooterIcon className='fas fa-chevron-up' />
                </ScrollLink>
                {data && <h3>{data.userSelection}</h3>}
                
                <Modal />
            </FooterContainer>
        </Fragment>
        
    )
}


/**
 * make multiple calls to an apollo hook
 * const { data: dataR, error: errorR, loading: landingR } = useQuery(GET_RESTAURANTS);
 * const { data, error, loading } = useQuery(GET_DAILY_MENU);
 */