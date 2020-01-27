import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: absolute; 
    display: flex;
    bottom: 0; 
    z-index: 1000;
    height: 5rem; 
    width: 90%; 
    margin: 0 auto -25rem auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 0 2rem; 
    background: ${props => props.theme.midLtGray}
    opacity: .7;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    /* border: .1rem solid green; */

    @media (min-width: 480px) {
        width: 95%;
        /* margin: 0 auto; */
    }
    @media (min-width: 769px) {
        width: 80%;
        /* margin: 0 auto; */
    }
    @media (min-width: 1025px) {
        width: 50%;
        /* margin: 0 auto; */
    }
    @media (min-width: 1601px) {
        width: 40%;
        /* margin: 0 auto; */
    }
`

export const FooterIcon = styled.i`
    font-size: 5rem;
    color: ${props => props.theme.unGray};

    &:hover {
        cursor: pointer;
    }
`
