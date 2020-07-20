import styled from 'styled-components'


export const CalendarContainer = styled.div`
    display: flex;
    height: 30%;
    width: 100%;
    justify-content: space-evenly;

    div {
        height: 13.5%;
        width: 13.5%;
        background: ${props => props.theme.primaryGray};
    }
`
