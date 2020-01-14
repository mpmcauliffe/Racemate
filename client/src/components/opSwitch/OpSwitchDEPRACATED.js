import React, { Fragment, } from 'react'
import PropTypes from 'prop-types'
import { ButtonSet, } from './OpSwitchComp'


export const OpSwitch = ({ opOne, opTwo, setting, opToggle, }) => {

    return (
        <Fragment>
            <ButtonSet
                name={opOne}
                active={setting}
                onClick={opToggle}

            >   {opOne}
            </ButtonSet>

            <ButtonSet
                name={opTwo}
                active={!setting}
                onClick={opToggle}
            
            >   {opTwo}
            </ButtonSet>
        </Fragment>
    )
}

OpSwitch.propTypes = {
    opOne: PropTypes.string,
    opTwo: PropTypes.string,
    setting: PropTypes.bool,
    opToggle: PropTypes.func,
}

OpSwitch.defaultProps = {
    opOne: 'Option One',
    opTwo: 'Option Two',
    setting: true,
}
