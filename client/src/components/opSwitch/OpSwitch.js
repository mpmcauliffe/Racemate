import React, { Fragment, useState, useEffect, } from 'react'
import PropTypes from 'prop-types'
import { ButtonSet, } from './OpSwitchComp'


export const OpSwitch = ({ optButtons, setting, handleToggle, }) => {

    const [buttonState, setButtonState] = useState([])

    useEffect(() => {
        setButtonState(optButtons.map((opt, index) => {
            return {
                name: opt,
                active: index === 0 ? true : false,
            }
        }))

    // eslint-disable-next-line
    }, [])

    const handleClick = e => {
        e.preventDefault()

        //console.log(e.target.name)
        handleToggle(e.target.name)
        setButtonState(buttonState.map(button => {
            return {
                ...button,
                active: button.name === e.target.name ? true : false,
            }
        }))
    }


    return (
        <Fragment>
            {buttonState.map(button => (
                    <ButtonSet
                        key={button.name} 
                        name={button.name}
                        active={button.active}
                        onClick={handleClick}

                    >   {button.name}
                    </ButtonSet>
            ))}
            
        </Fragment>
    )
}

OpSwitch.propTypes = {
    optButtons: PropTypes.array, 
    setting: PropTypes.bool,
    handleToggle: PropTypes.func,
}

OpSwitch.defaultProps = {
    optButtons: ['Option One', 'Option Two'],
    setting: true,
}
