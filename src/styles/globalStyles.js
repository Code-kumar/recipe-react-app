import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html ,body{
    height: 100%;
  }
  body {
    margin: 0 20%;
    font-family: 'Poppins', sans-serif;
  }

  .App{
    padding-bottom: 100px;
  }
`;
 
export default GlobalStyle;