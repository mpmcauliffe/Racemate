import styled from 'styled-components'


export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;

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

export const SubmitButton = styled.button`
    margin-top: 5rem;
    background: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.lightGray};
    transition: 500ms;

    &:hover {
        background: ${props => props.theme.midGrayWarm};
        color: ${props => props.theme.colorPrimary};
    }
    &:focus {
        border: .3rem solid ${props => props.theme.colorSuccess}
    }
`