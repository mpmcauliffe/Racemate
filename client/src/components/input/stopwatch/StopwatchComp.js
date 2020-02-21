import styled from 'styled-components'


export const SWtext = styled.h1`
    flex-basis: 100%;
    font-size: 10rem;
    font-weight: 400;
    text-align: center;
    font-stretch: condensed;
    color: ${props => props.theme.secondaryLight};

    @media(max-width: 420px) {
        font-size: 6.6rem;
    }
    
`
export const BtnRound = styled.button`
    height: 7rem;
    width: 7rem;
    border: .07rem solid ${props => props.theme.primaryGray};
    border-radius: 50%;
    background: transparent;

    &:focus {
        border-color: ${props => props.theme.primaryGray}
    }
`