import React from 'react'
import { CardContainer, 
        CardIcon, 
        CardName, 
        CardType,
        IconContainer, } from './CardComp'
import { BasicModal, } from '../../components'

import { truncate, } from '../../helpers'


export const Card = props => {
    const { info } = props

    const cardActivate = e => {
        e.preventDefault()
        console.log('card activate')
    }
    const editClick = e => {
        e.preventDefault()
        console.log(info.id)
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
                
                <CardIcon className='fas fa-dumbbell' onClick={cardActivate}></CardIcon>
            </IconContainer>
            {/****/}
        </CardContainer>
    )
}
