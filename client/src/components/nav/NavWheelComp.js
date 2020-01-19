import styled from 'styled-components'


export const NavWheel = styled.div`
    & > input {
        display: none;
    }

    & > label {
        position: fixed;
        top: 6rem;
        right: 6rem;
        z-index: 2000;
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        background-color: ${props => props.theme.lightGray};
        text-align: center;
        box-shadow: 0 1rem 3rem rgba(${props => props.theme.colorPrimary}, .1);
        cursor: pointer;
    }

    & > div {
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        position: fixed;
        z-index: 1000;
        top: 6.5rem;
        right: 6.5rem;
        background-image: radial-gradient(
            ${props => props.theme.colorLight}, 
            ${props => props.theme.colorDark}
        );
        transition: transform .8s cubic-bezier(.86, 0, .07, 1); /* https://cubic-bezier.com */
    }
`
