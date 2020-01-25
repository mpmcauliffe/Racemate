import React from 'react'
import { CardContainer, CardName, } from './CardComp'
import { truncate, } from '../../helpers'


export const Card = props => {
    const { info } = props

    return (
        <CardContainer>
            <CardName>{truncate(info.title, 15)}</CardName>
            {/****/}
        </CardContainer>
    )
}
