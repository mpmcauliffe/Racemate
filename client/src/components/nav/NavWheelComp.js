import styled from 'styled-components'


export const NavWheel = styled.div`
    /* border: .1rem solid blue; */
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

    & > nav {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1500;
        transition: all .8s;

        /* not toggled */
        opacity: 0;
        width: 0;

        /* cool overlap effect */
        /* background-color: orangered; */

        & > ul {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            list-style: none;
            text-align: center;

            & > li {
                margin: 1rem;

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
                }
            }
        }
    }
`
