import styled from 'styled-components'



export const Segment = styled.div`
    /* color: lightgray; */
    /* height: 10rem; */
    .hide {
        opacity: 0;
        max-height: 0;
        overflow-y: hidden;
        transition: all 0.4s ease-out;
    }

    .show {
        max-height: 20rem;
        margin-bottom: 10rem;
        opacity: 1;
        transition: all 0.4s ease-out;
    }
`

export const Arrow = styled.label`
    position: relative;
    right: 4rem;
    top: 2rem;
    cursor: pointer;
    user-select: none;

    input {
        position: absolute;
        height: 0;
        width: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
    }

    span {
        position: absolute;
        height: 4rem;
        width: 5rem;
        margin: 0;
        
        background: ${props => props.theme.colorLight};
        transition: transform 500ms;
        cursor: pointer;
        clip-path: polygon(50% 100%, 82% 59%, 60% 59%, 60% 0, 40% 0, 40% 59%, 18% 59%);
    }

    input:checked ~ span {
        background: ${props => props.theme.secondaryLight};
        transform: rotate(180deg);
    } 
    &:after {
        background: ${props => props.theme.secondaryLight};
        transform: rotate(180deg);
    }
`
export const AccordionFront = styled.div`
    display: flex;
    overflow-x: hidden;

    min-height: 20rem;
    width: 100%;

    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 2rem 0 2rem;

    border: .1rem solid ${props => props.theme.primaryGray};

    h3 {
        color: ${props => props.theme.primaryGray};
    }
    & > div {
        height: 100vh;
        color: pink;
    }
`