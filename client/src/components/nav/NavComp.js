import styled from 'styled-components'


export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colorPrimary};

    @media (min-width: 769px) {
        width: 80%;
        /* width: 100%; */
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
    /* color: ${props => props.theme.colorlight}; */
    color: ${props => props.theme.midLtGray};

    @media (min-width: 769px) {
        margin-top: 1rem;
        /* margin-left: 25%; */
        padding: 0;
    }
`

export const NavLink = styled.h4`
    color: ${props => props.theme.highlight};
`
export const BackBar = styled.div`
    position: absolute;
    z-index: -5;
    width: 100%;

`
