import styled from 'styled-components'


export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* @media (min-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }
    @media (min-width: 1024px) {
        width: 50%;
        margin: 0 auto;
    }
    @media (min-width: 1600px) {
        width: 60%;
        margin: 0 auto;
    } */
`

export const Header = styled.h1`
    margin-top: 1rem;
    padding: 0 1rem;
    color: ${props => props.theme.primaryGray};
`
