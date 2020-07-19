import styled from 'styled-components'


export const MainGrid = styled.div.attrs(props => ({

}))`
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    /* grid-template-columns: ${() => window.innerWidth < 641 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'} */
    grid-template-columns: ${() => window.innerWidth < 641 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
    grid-auto-rows: 1fr;
    grid-gap: .1em;
    margin-bottom: 9rem;
    

    &::before {
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    & > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }
`
