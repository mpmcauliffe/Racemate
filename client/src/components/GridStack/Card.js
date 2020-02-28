import React, { useContext, } from 'react'
import ModalFormContext from '../../context/modalForm/modalFormContext'

import { CardContainer, 
        CardIcon, 
        CardName, 
        CardType,
        IconContainer, } from './CardComp'
import { ActiveModal, BasicModal, } from '../../components'

import { truncate, } from '../../helpers'


export const Card = props => {
    const { toggleEditOn, setEditExerciseId, }      = useContext(ModalFormContext)

    const { info } = props

    const cardActivate = e => {
        e.preventDefault()
    }
    
    const editClick = e => {
        e.preventDefault()
        toggleEditOn()
        setEditExerciseId(info.id)
    }

    return (
        <CardContainer>
            <CardName>{truncate(info.title, 15)}</CardName>
            <CardType>{truncate(info.exerciseType, 19)}</CardType>
            <IconContainer>
                <BasicModal>
                    <CardIcon 
                        className='far fa-edit' 
                        onClick={editClick}
                        editId={info.id} />
                </BasicModal>
                
                <ActiveModal>
                    <CardIcon 
                        className='fas fa-dumbbell' 
                        onClick={cardActivate}
                        activeName={truncate(info.title, 25)}
                        activeId={info.id} />
                </ActiveModal>
            </IconContainer>
            {/****/}
        </CardContainer>
    )
}
