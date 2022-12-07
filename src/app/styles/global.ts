import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }
    
    body {
        background-color: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme["gray-800"]};

        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font: 400 1rem 'Inter', sans-serif;
    }
`