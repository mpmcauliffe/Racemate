import styled from 'styled-components'


export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: ${props => props.theme.lightGray} */

    @media (min-width: 769px) {
        width: 80%;
        margin: 0 auto;
    }
    @media (min-width: 1025px) {
        width: 50%;
        margin: 0 auto;
    }
    @media (min-width: 1601px) {
        width: 60%;
        margin: 0 auto;
    }
`

export const Header = styled.h1`
    margin-top: 1rem;
    padding: 0 1rem;
    color: ${props => props.theme.primaryGray};

    @media (min-width: 769px) {
        margin-top: 1rem;
        padding: 0;
    }
`

export const NavLink = styled.h4`
    color: ${props => props.theme.lightGray}
`
