import styled from 'styled-components'


export const AlertBox = styled.div`
    height: 2.7rem;
    width: 90%;
    margin: 2rem auto 0 auto;
    background: ${props => props.theme.colorWarningLight};
    /* opacity: .2; */
    border-radius: .5rem;
    /* border: .3rem solid ${props => props.theme.colorWarning}; */

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

export const AlertText = styled.p`
    text-align: center;
    color: ${props => props.theme.colorWarning};
`
