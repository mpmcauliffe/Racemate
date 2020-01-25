import React from 'react'
import { useQuery, } from '@apollo/react-hooks'
import { Card, } from './Card'
import { MainGrid, } from './GridStackComp'
import { Loader } from '../../components'
import { GET_EXERCISES } from '../../graphql'


export const GridStack = () => {
    const { loading, data, } = useQuery(GET_EXERCISES)

    if (loading) {
        return <Loader />
    }

    const { myExercises } = data
    console.log(myExercises)
    return (
        <MainGrid>
            {myExercises && myExercises.map((item, index) => (            
                <img src={require(`../banner/img/${index+1}.png`)} alt="aaa"/>
                
                                            
            ))}    
        </MainGrid>
    )
}
// {/**<Card 
//                     key={item.id}
//                     info={item} />**/}    

