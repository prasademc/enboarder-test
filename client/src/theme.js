import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #003366;
    padding: 0;
    margin: 0;
  }

  #cape-canaveral {
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export default GlobalStyle;
