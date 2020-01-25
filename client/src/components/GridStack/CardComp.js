import styled from 'styled-components'


export const CardContainer = styled.div.attrs(props => ({
  
    // or we can define dynamic ones
    size: props
}))`
    /* height: ${props => console.log(props.size)}; */
    /* width: 33%; */
    /* padding-bottom: 52%; */
    background: ${props =>  props.theme.colorPrimary};
    /* border: 1px solid ${props => props.theme.colorDark}; */
`

export const CardName = styled.h3`
    position: relative;
    font-size: 1.8rem;
    color: ${props => props.theme.lightGray}
`
