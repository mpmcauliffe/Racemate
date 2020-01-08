import { InMemoryCache } from 'apollo-cache-inmemory'
import { gql, } from 'apollo-boost'


const cache = new InMemoryCache()

export const Query = cache.readQuery({
    query: gql`
        query userTypes {
            isLoggedIn @client
        }
    `
})
