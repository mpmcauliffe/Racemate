import React from 'react'
import PropTypes from 'prop-types'
import { AlertBox, AlertText } from './AlertComp'


export const Alert = ({ text, color }) => {
    return (
        <AlertBox>
            <AlertText>This is an alert. You will die.</AlertText>
        </AlertBox>
    )
}

Alert.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
Alert.defaultProps = {
    text: 'Alert: Something happened.',
    color: 'warning',
}
