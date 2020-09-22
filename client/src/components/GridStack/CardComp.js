import styled from 'styled-components'


export const CardContainer = styled.div`
    height: 10rem;
    padding: 1rem;

    /* display: grid;
    grid-template-columns: 2fr 3fr; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }  */

    background: ${props =>  props.theme.colorPrimary};

    div:first-of-type {
        margin-top: 0rem;
        align-self: flex-end; 
    }
    div button { 
        height: 4rem;
        text-align: right;
    }
    p { margin-top: -3.5rem; }

    
    @media (min-width: 481px) { p { font-size: 1.7rem; } }
    /* @media (min-width: 769px) { p { margin-top: 7%; } }
    @media (min-width: 1025px) { p { margin-top: 5%; } }
    @media (min-width: 1601px) { p { margin-top: 4%; } } */
`

export const CardName = styled.h3`
    /* grid-column-start: 1;
    grid-column-end: 3; */

    margin: .7rem 0;

    font-size: 2.3rem;
    font-weight: 500;
    color: ${props => props.theme.lightGray};

    @media (min-width: 480px) {
        font-size: 2.3rem
    }
    @media (min-width: 769px) {
        font-size: 2.7rem
    }
`
export const CardType = styled.p`
    margin-top: 6%;
    font-size: 1.7rem;
    color: ${props => props.theme.midGrayCool};

    @media (min-width: 480px) { font-size: 1.7rem; }
    @media (min-width: 640px) { font-size: 1.7rem; }
    @media (min-width: 769px) { margin-top: 4%; }
    @media (min-width: 1025px) { margin-top: 3%; }
    @media (min-width: 1601px) { margin-top: 2%; }
`

export const IconButton = styled.button`
    /* grid-row-start: 1;
    grid-row-end: 3; */

    width: 13rem;
    color: ${props => props.theme.midLtGray};
    background: transparent;

    span {
        font-size: 2.3rem;
    }

    .exercise {
        color: ${props => props.theme.midLtGray};
    }

    &:focus { border: .1rem solid #ffb900; }

    @media (min-width: 480px) { font-size: 1.8rem; }
    @media (min-width: 640px) { font-size: 2rem; }
    @media (min-width: 769px) { }
    @media (min-width: 1025px) { font-size: 2rem; }
    @media (min-width: 1601px) { font-size: 2.5rem; }
`

export const CardIcon = styled.i`
    /* margin-right: 3.3rem; */
    font-size: 2rem;
    color: ${props => props.theme.midGrayCool};
    cursor: pointer;
`
