import { createGlobalStyle, } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
    }
    button:disabled {
        cursor: default;
    }
    h1 {
        font-family: "proxima-nova-condensed";
        font-size: 5rem;
        font-weight: 700;
    }
`


export { GlobalStyle }
