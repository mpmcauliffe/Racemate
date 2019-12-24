import styled from 'styled-components'


export const ButtonSet = styled.button`
    font-style:normal;
    font-weight: 400;
    font-size: 1.2rem;
    max-height: 3rem;
    max-width: 10rem;
    /* margin-bottom: 5rem; */
    float: right;
    color: ${props => props.theme.lightGray};
    background: ${props => (props.active ? props.theme.colorPrimary : props.theme.unGray)};
    transition: 500ms;

    &:focus {
        outline: none;
        border: .1rem solid ${props => props.theme.midGray}
    }

    @media (max-width: 769px) {
        /* width: 100%; */
    }
`
