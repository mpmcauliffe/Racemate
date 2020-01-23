import styled from 'styled-components'


export const StripContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 9rem;
`

export const StripImg = styled.img`
    height: ${window.innerWidth > 480 ? '12vw' : '24vw'};
    width: ${window.innerWidth > 480 ? '12vw' : '24vw'};
    max-height: 12rem;
    max-width: 12rem;
    border: 1px solid ${props => props.theme.colorPrimary};
`
