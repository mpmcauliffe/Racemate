import styled from 'styled-components'


export const NavMenuKit = styled.div`
    /* border: .1rem solid blue; */
    .navigation__checkbox {
        display: none;
    }
    .navigation__button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 3000;
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        background-color: ${props => props.theme.midLtGray};
        text-align: center;
        /* box-shadow: 0 1rem 3rem rgba(${props => props.theme.colorPrimary}, .1); */
        cursor: pointer;
    }
    .navigation__background {
        position: absolute;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        z-index: 2000;
        top: 3rem;
        right: 3rem;
        background-image: radial-gradient(
            ${props => props.theme.colorPrimary}, 
            ${props => props.theme.colorDark}
        );
        transition: transform .8s cubic-bezier(.86, 0, .07, 1); /* https://cubic-bezier.com */

        @media (min-width: 769px) {
            right: 11.5%;
        }
        @media (min-width: 1025px) {            
            right: 26.5%;
            
        }
        @media (min-width: 1601px) {            
            right: 16%;            
        }
    }

    .navigation__nav {
        position: absolute;
        height: 100vh;
        /* position: fixed; */
        top: 0;
        /* left: 0; */
        left: -100%;
        z-index: 2500;
        transition: all .8s;

        /* not toggled */
        opacity: 0;
        width: 0;

        /* cool overlap effect */
        /* background-color: orangered; */
    }


    .navigation__checkbox:checked ~ .navigation__background {
        position: fixed;
        transform: scale(150);
    }
    .navigation__checkbox:checked ~ .navigation__nav {
        opacity: 1;
        left: 0;
        width: 100%;
    }


    .navigation__icon {
        position: relative;
        margin-top: 2.5rem;
    }
    .navigation__icon, .navigation__icon::before, .navigation__icon::after {
        display: inline-block;
        width: 3rem;
        height: 0.2rem;
        background-color: ${props => props.theme.colorPrimary};
    }
    .navigation__icon::before, .navigation__icon::after {
        content: "";
        position: absolute;
        left: 0;
        transition: 0.2s;
    }
    .navigation__icon::before {
    top: -0.8rem;
    }
    .navigation__icon::after {
        top: 0.8rem;
    }
    .navigation__button:hover .navigation__icon::before {
        top: -1rem;
    }
    .navigation__button:hover .navigation__icon::after {
        top: 1rem;
    }
    .navigation__checkbox:checked + .navigation__button .navigation__icon {
        background-color: transparent;
    }
    .navigation__checkbox:checked + .navigation__button .navigation__icon::before {
        top: 0;
        transform: rotate(135deg);
    }
    .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
        top: 0;
        transform: rotate(-135deg);
    }


    @media (min-width: 769px) {
    .navigation__button,
    .navigation__nav {
            right: 10%;
        }
    }
    @media (min-width: 1025px) {
        .navigation__button,
        .navigation__nav {
            right: 25%;
        }
    }
    @media (min-width: 1601px) {
        .navigation__button,
        .navigation__nav {
            right: 15%;
        }
    }

    /* & > ul {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
    }

    & > li {
        margin: 1rem;
    }

    & > a {
        &:link,
        &:visited {
            display: inline-block;
            font-size: 3rem;
            font-weight: 300;
            padding: 1rem 2rem;
            color: ${props => props.theme.colorWhite};
            text-decoration: none;
            text-transform: uppercase;
            background-image: linear-gradient(
                110deg, transparent 0%, transparent 50%, ${props => props.theme.colorWhite} 50%
            );
            background-size: 220%;
            transition: all .5s;
        }
        &:hover,
        &:active {
            background-position: 100%;
            color: ${props => props.theme.colorPrimary};
            transform: translateX(1rem);
        }
    } */
`
