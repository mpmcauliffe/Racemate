import styled from 'styled-components'


export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Header = styled.h1`
    margin-top: 1rem;
    padding: 0 1rem;
    color: ${props => props.theme.primaryGray};
`
