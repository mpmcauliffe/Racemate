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

export const InternalContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-basis: 100%; 
    margin-bottom: 2rem;
`

export const UpdateText = styled.p`
    font-size: 2.1rem;
    margin: 1rem;
    &&& { color: ${props => props.theme.primaryGray}; } /* ANNOYING */
`

export const OptionText = styled.p`
    margin: 1rem;
    flex-basis: 100%;
    
    font-size: 2.1rem; 
    text-align: center;

    cursor: pointer;

    &&& { color: ${props => props.theme.secondaryLight}; } /* ANNOYING */
    
    @media(max-width: 480px) {
        &&& { font-size: 1.6rem; } 
    }
`

export const RepInput = styled.input.attrs(props => ({
    type: 'number',
    min: '0'
}))`
    flex-basis: 20%;
    margin: .3rem .1rem;
    font-size: ${props => props.value > 999 ? '1.5rem' : '1.9rem'};

    background: ${props => props.counter && props.theme.colorDark};
    color: ${props => props.counter && props.theme.lightGray};

    @media(max-width: 480px) {
        flex-basis: 40%;
        margin: 1rem;
    }
    @media(max-width: 400px) {
        /* flex-basis: 40%; */
        margin: .1rem;
    }
`

export const Spool = styled.select`
    height: 3.5rem;
    width: 80%;
    flex-basis: 20%;

    margin: .3rem .1rem;
    padding: .5rem;
    
    font-size: ${props => props.value > 999 ? '1.5rem' : '1.9rem'};

    border-radius: .5rem;
    border: 1px solid #b9a9a9;
    transition: 500ms;

    background: ${props => props.counter && props.theme.colorDark};
    color: ${props => props.counter && props.theme.lightGray};

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

