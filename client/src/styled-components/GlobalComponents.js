import styled from 'styled-components'


export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const SubmitButton = styled.button`
    margin-top: 5rem;
    background: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.lightGray};
    transition: 500ms;

    &:hover {
        background: ${props => props.theme.midGrayWarm};
        color: ${props => props.theme.colorPrimary};
    }
`
