import React, { useContext, } from 'react'
import ModalFormContext from '../../context/modalForm/modalFormContext'

import { CardContainer, 
        CardIcon, 
        CardName, 
        CardType,
        IconContainer, } from './CardComp'
import { ActiveModal, BasicModal, } from '../../components'

import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { UPDATE_CACHE_SET, } from '../../graphql'

import { truncate, } from '../../helpers'


export const Card = props => {
    const [updateSet]                               = useMutation(UPDATE_CACHE_SET)
    
    const { toggleEditOn, setEditExerciseId, }      = useContext(ModalFormContext)

    const { info, }                                 = props

    const cardActivate = async e => {
        e.preventDefault()

        //client.writeQuery({ query: UPDATE_CACHE_SET, variables: { id: info.id } })
        //const cacheUpdate = await updateSet({ variables: { id: info.id } })
        setEditExerciseId(info.id)

        //openModal()
    }
    
    const editClick = e => {
        e.preventDefault()
        toggleEditOn()
        setEditExerciseId(info.id)
    }

    return (
        <CardContainer>
            <CardName>{truncate(info.title, 27)}</CardName>
            {/**/}
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
