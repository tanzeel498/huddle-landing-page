import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
    --color-pink: hsl(322, 100%, 66%);
    --color-pale-cyan: hsl(193, 100%, 96%);
    --color-dark-cyan: hsl(192, 100%, 9%);
    --color-grayish-blue: hsl(208, 11%, 55%);
    }


    *, *::after, *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: var(--color-grey-0);
        color: hsl(192, 100%, 9%);
        font-family: "Poppins", sans-serif;
        font-size: 18px;
    }

    p {
        line-height: 1.5;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1.15rem;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
