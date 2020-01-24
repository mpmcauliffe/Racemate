import styled from 'styled-components'


export const CardContainer = styled.div`
    height: 33vw;
    width: 33vw;
    background: ${props =>  props.theme.colorPrimary};
    border: 1px solid ${props => props.theme.colorDark};
`
