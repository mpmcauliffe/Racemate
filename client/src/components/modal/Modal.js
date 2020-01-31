import React, { useEffect, } from 'react'
import ReactModal from 'react-modal'
import { ModalComp, ModalTitle, } from './ModalComp' 


export const Modal = ({ modalToggle }) => {
    useEffect(() => ModalComp.setAppElement('body'), [])


    return (
        <ModalComp isOpen={modalToggle}>
            {/**<ModalTitle></ModalTitle>**/}
            <h3>Add Exercise</h3>
        </ModalComp>
    )
}
