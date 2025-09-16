import {createGlobalStyle} from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.text.title};
    }

    ul, ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: ${({theme}) => theme.colors.bgSecondary};
        color: ${({theme}) => theme.colors.text.primary};
        line-height: 1.5;
        transition: background-color ${({theme}) => theme.transition},
        color ${({theme}) => theme.transition};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input, textarea, select {
        font: inherit;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }


`
