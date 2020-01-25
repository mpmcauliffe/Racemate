import React from 'react'
import { CardContainer, CardName, } from './CardComp'


export const Card = props => {
    const { info } = props

    return (
        <CardContainer>
            <CardName>{info.title}</CardName>
            {/****/}
        </CardContainer>
    )
}
