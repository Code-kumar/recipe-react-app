import { createGlobalStyle } from 'styled-components';
import { SearchBox, SLink, CategoryList } from './main.styled';
 
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

  @media screen and (max-width: 991.98px) {
    body{
      margin: 0 10%;
    }
  }
  @media screen and (max-width: 767.98px) {
    ${SearchBox}{
      min-width: 300px;
      max-width: 300px;
    }
    ${SLink}{
      margin: 0 5px;
    }
    ${CategoryList}{
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 575.98px) {
    ${SearchBox}{
      min-width: 200px;
      max-width: 200px;
    }
  }
`;
 
export default GlobalStyle;