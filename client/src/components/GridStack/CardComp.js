import styled from 'styled-components'


export const CardContainer = styled.div.attrs(props => ({
  
    // or we can define dynamic ones
    size: props
}))`
    /* height: ${props => console.log(props.size)}; */
    /* width: 33%; */
    /* padding-bottom: 52%; */
    padding-left: 1rem;
    padding-bottom: 65%;

    background: ${props =>  props.theme.colorPrimary};
    /* border: 1px solid ${props => props.theme.colorDark}; */
`

export const CardName = styled.h3`
    position: relative;
    font-size: 1.8rem;
    color: ${props => props.theme.lightGray};

    @media (min-width: 480px) {
        font-size: 2.3rem
    }
    /* @media (min-width: 1024px) {
        font-size: 2.7rem
    }
    @media (min-width: 1600px) {
        font-size: 3rem;
    } */
`
