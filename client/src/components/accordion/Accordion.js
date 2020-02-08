import React, { Fragment, } from 'react'
import { AccordionFront, Arrow, } from './AccordionComp'


export const Accordion = () => {
    return (
        <Fragment>
            <AccordionFront>
                <h3>Sets, reps, and weight</h3>
                
                <Arrow>
                    <input type='checkbox' />
                    <span />
                </Arrow>
            </AccordionFront>

            <AccordionFront>
                <h3>Endurance and time</h3>
                
                <Arrow>
                    <input type='checkbox' />
                    <span />
                </Arrow>
            </AccordionFront>
        </Fragment>
        
    )
}
