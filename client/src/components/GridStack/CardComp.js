import styled from 'styled-components'


export const CardContainer = styled.div`
    padding-left: 1rem;
    /* padding-bottom: 65%; */
    padding-bottom: 100%;
    background: ${props =>  props.theme.colorPrimary};
    /* border: 1px solid ${props => props.theme.colorDark}; */
`

export const CardName = styled.h3`
    /* position: relative; */
    position: absolute;
    margin: .7rem 0;
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.theme.lightGray};

    @media (min-width: 480px) {
        font-size: 2.3rem
    }
    @media (min-width: 769px) {
        font-size: 2.7rem
    }
    /* @media (min-width: 1600px) {
        font-size: 3rem;
    } */
`
export const CardType = styled.p`
    position: absolute;
    margin-top: 6%;
    font-size: 1.7rem;
    color: ${props => props.theme.midGrayCool};

    @media (min-width: 480px) {
        font-size: 1.7rem;
    }
    @media (min-width: 640px) {
        font-size: 1.7rem;
    }
    @media (min-width: 769px) {
        margin-top: 4%;
    }
    @media (min-width: 1025px) {
        margin-top: 3%;        
    }
    @media (min-width: 1601px) {
        margin-top: 2%;
    }
`

//export const 

export const IconButton = styled.button`
    display: flex;
    position absolute;
    width: 27%;
    /* justify-content: space-between; */
    margin-top: 45%
    color: ${props => props.theme.colorlight};
    border: .1rem solid ${props => props.theme.colorlight};
    background: transparent;

    .exercise {
        color: ${props => props.theme.colorlight};
    }

    @media (min-width: 480px) {
        font-size: 1.8rem;
        width: 30%;
        /* margin-top: 25%; */
    }
    @media (min-width: 640px) {
        font-size: 2rem;
        width: 30%;
        /* margin-top: 15%; */
    }
    @media (min-width: 769px) {
        width: 24%;
        margin-top: 23%; 
    }
    @media (min-width: 1025px) {
        margin-top: 13%;
        font-size: 2rem;
        width: 15%;
    }
    @media (min-width: 1601px) {
        margin-top: 11%;
        font-size: 2.5rem;
        width: 12%;
    }
`

export const CardIcon = styled.i`
    position: absolute;
    font-size: 2rem;
    color: ${props => props.theme.midGrayCool};
    cursor: pointer;
`
