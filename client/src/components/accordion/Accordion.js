import React, { Fragment, useState, } from 'react'
import { AccordionFront, Arrow, Segment, } from './AccordionComp'


export const Accordion = props => {
    const [showSegment, setShowSegment] = useState(false)

    const handleCheckboxChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        console.log(target, value, name)
        setShowSegment(!showSegment)
    }

    return (
        <Fragment>
            <AccordionFront>
                <h3>{props.name}</h3>
                <Arrow>
                    <input 
                        type='checkbox'
                        name='sets'
                        onChange={handleCheckboxChange}  />
                    <span />
                </Arrow>
                <div className={showSegment ? 'show' : 'hide'}>
                    {props.children}
                </div>
            </AccordionFront>
        </Fragment>
    )
}
