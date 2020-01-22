import React from 'react'
import { useQuery, } from '@apollo/react-hooks'
import { Card, } from './Card'
import { Loader } from '../../components'
import { GET_EXERCISES } from '../../graphql'


export const GridStack = () => {
    const { loading, data, } = useQuery(GET_EXERCISES)

    if (loading) {
        return <Loader />
    }

    const { myExercises } = data
    
    return (
        <div>
            {myExercises && myExercises.map(item => (
                <Card 
                    key={item.id}
                    info={item} />
            ))}    
        </div>
    )
}


