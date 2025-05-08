import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-sizing: 0 0 0 2px;
        color: ${props => props.theme.blue300};
    }

    body{
        background: ${props => props.theme.white};
        color: ${props => props.theme.gray900};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-seriff;
        font-weight: 400;
        font-size: 1rem;
    }

    
`;