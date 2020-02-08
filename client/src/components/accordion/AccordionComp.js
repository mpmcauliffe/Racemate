import styled from 'styled-components'


export const AccordionFront = styled.div`
    display: flex;

    height: 6rem;
    width: 100%;

    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 0 2rem;

    border: .1rem solid ${props => props.theme.primaryGray};

    h3 {
        color: ${props => props.theme.primaryGray};
    }
`
export const Segment = styled.div`

`

export const Arrow = styled.label`
    position: relative;
    right: 4rem;
    top: .9rem;
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
