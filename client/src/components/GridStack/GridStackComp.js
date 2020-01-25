import styled from 'styled-components'


export const MainGrid = styled.div.attrs(props => ({

}))`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: repeat(auto-fill, minmax(12rem, 2fr)); */
    grid-auto-rows: 1fr;

    grid-gap: .1em;
    /* grid-auto-rows: minmax(100px, auto); */
    

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
    /* & > * {
        background: rgba(0,0,0,0.1);
        border: 1px white solid;
    } */
`
