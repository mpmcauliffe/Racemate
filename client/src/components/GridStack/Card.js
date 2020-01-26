import React from 'react'
import { CardContainer, 
        CardIcon, 
        CardName, 
        IconContainer, } from './CardComp'
import { truncate, } from '../../helpers'


export const Card = props => {
    const { info } = props

    const cardClick = e => {
        e.preventDefault()
        console.log('Card click')
    }
    const editClick = e => {
        e.preventDefault()
        console.log('edit click')
    }

    return (
        <CardContainer onClick={cardClick}>
            <CardName>{truncate(info.title, 15)}</CardName>
            <IconContainer>
                <CardIcon className='far fa-edit' onClick={editClick}></CardIcon>
                <CardIcon className='fas fa-dumbbell'></CardIcon>
            </IconContainer>
            {/****/}
        </CardContainer>
    )
}
