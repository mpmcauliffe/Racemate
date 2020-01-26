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
export const IconContainer = styled.div`
    display: flex;
    position absolute;
    width: 27%;
    justify-content: space-between;

    margin-top: 13%;
    font-size: 2.5rem;
    color: ${props => props.theme.midGrayCool};

    @media (min-width: 640px) {
        /* font-size: 2.5rem; */
        width: 30%;
        margin-top: 15%;
    }
    @media (min-width: 769px) {
        font-size: 3rem;
        width: 24%;
        margin-top: 12%; 
    }
    @media (min-width: 1025px) {
        margin-top: 8%;
        font-size: 2rem;
        width: 15%;
    }
    @media (min-width: 1601px) {
        margin-top: 6%;
        font-size: 2.5rem;
        width: 12%;
    }
`

export const CardIcon = styled.i`
    /* position: absolute; */
    /* bottom: 0; */



    &:hover {
        cursor: pointer;
    }

    
`
