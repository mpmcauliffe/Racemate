import React from 'react'
import { useQuery, } from '@apollo/react-hooks'
import { Card, } from './Card'
import { GET_EXERCISES } from '../../graphql'


export const GridStack = () => {
    const { loading, data, } = useQuery(GET_EXERCISES)


    if (loading) {
        return <div>LOADING</div>
    }
console.log(data)
    return (
        <div>
            {data && data.map(item => (
                <Card 
                    info={data} />
            ))}    
        </div>
    )
}


