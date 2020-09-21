import React, { useContext, } from 'react'
import ModalFormContext from '../../context/modalForm/modalFormContext'

import { CardContainer, 
        CardIcon, 
        CardName, 
        CardType,
        IconButton, } from './CardComp'
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
            <div>
                <CardName>{truncate(info.title, 35)}</CardName>
                {/* <em>Edit</em> */}
                <BasicModal>
                    <p>
                        <CardIcon 
                            className='far fa-edit' 
                            onClick={editClick}
                            editId={info.id}
                            //style={{ marginTop: '2%', }} 
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </BasicModal>
            </div>
            
            <ActiveModal>
                <IconButton 
                    onClick={cardActivate}
                    activeName={truncate(info.title, 25)}
                    activeId={info.id}
                    //style={{ height: '5rem' }} 
                    >
                    <span><em>Exercise</em></span>
                    &nbsp;&nbsp;
                    
                    <CardIcon className='fas fa-dumbbell exercise'  />
                    
                </IconButton>
            </ActiveModal>
            {/*  */}
            
            {/****/}
        </CardContainer>
    )
}
// ./src/components/index.js
//        Cannot find file './calendar/Calendar' in './src/components'.