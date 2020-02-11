import styled from 'styled-components'


export const SetContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: ${props => props.short ? '1rem auto' : '3rem auto'};

    p {
        font-size: 2.1rem;
        margin: 1rem;
        color: ${props => props.theme.midLtGray};
    }
`
export const UpdateText = styled.p`
    font-size: 2.1rem;
    margin: 1rem;
    &&& { color: ${props => props.theme.primaryGray}; } /* ANNOYING */
`
export const RepInput = styled.input.attrs(props => ({
    type: 'number',
    min: '0'
}))`
    flex-basis: 20%;
    margin: .3rem .1rem;
    font-size: ${props => props.value > 999 ? '1.5rem' : '1.9rem'};

    @media(max-width: 480px) {
        flex-basis: 40%;
        margin: 1rem;
    }
    @media(max-width: 400px) {
        /* flex-basis: 40%; */
        margin: .1rem;
    }
`
//@media (min-width: 1024px)

