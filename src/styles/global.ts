import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: #FAFAFA;
    color: #574F4D;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 'Baloo 2'
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;