import React, { useEffect } from 'react'
import { useApolloClient, useQuery, } from '@apollo/react-hooks'
import { gql, } from 'apollo-boost'


const FETCH_TOKEN = gql`
  {
    isLoggedIn @client,
    userToken @client
  }
`

const Home = () => {
    const { loading, error, data } = useQuery(FETCH_TOKEN)


    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div>
            <h2>{data}</h2>
        </div>
    )
}


export { Home }
