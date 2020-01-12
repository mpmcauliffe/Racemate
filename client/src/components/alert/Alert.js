import React, { useContext, } from 'react'
// import PropTypes from 'prop-types'
import AlertContext from '../../context/alert/alertContext'
import { AlertBox, AlertText } from './AlertComp'


export const Alert = (/*{ text, color }*/) => {
    const alertContext = useContext(AlertContext)


    return (
        <AlertBox 
            type={alertContext.alerts.type}
            isVisible={alertContext.alerts.isVisible} >

            <AlertText 
                type={alertContext.alerts.type} >
                
            {alertContext.alerts.msg}</AlertText>
        </AlertBox>
    )
}

// Alert.propTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
// }
// Alert.defaultProps = {
//     text: 'Alert: Something happened.',
//     color: 'warning',
// }
