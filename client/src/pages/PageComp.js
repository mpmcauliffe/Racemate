import styled from 'styled-components'


export const PageContainer = styled.div`
    display: inlineblock;
    minWidth: 70vw;
    margin: 0 auto;
    padding: 3rem;

    @media (min-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }
    @media (min-width: 1024px) {
        width: 50%;
        margin: 0 auto;
    }
    @media (min-width: 1600px) {
        width: 33%;
        margin: 0 auto;
    }
`

export const WidePageContainer = styled.div`
    
`
