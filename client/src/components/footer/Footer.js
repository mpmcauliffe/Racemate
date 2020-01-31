import React, { Fragment, useState, } from 'react'
import PropTypes from 'prop-types'
import { useQuery, useSubscription, } from '@apollo/react-hooks'
import { Link as ScrollLink } from 'react-scroll'
import { FooterContainer, FooterIcon, } from './FooterComp'
import { Modal, } from '../../components'
import { GET_TOGGLE_STATUS } from '../../graphql'



export const Footer = () => {
    const [modalToggle, setModalToggle] = useState(false)
    const { loading, data } = useQuery(GET_TOGGLE_STATUS)

    const handleModalToggle = () => setModalToggle(!modalToggle)

    return (
        <Fragment>
            <Modal modalToggle={modalToggle} />
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
                <FooterIcon 
                    onClick={handleModalToggle}
                    className='fas fa-plus' />   
            </FooterContainer>
        </Fragment>
        
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