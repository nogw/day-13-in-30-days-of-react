import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f2fa;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: monospace;
  }
`;

export default GlobalStyle