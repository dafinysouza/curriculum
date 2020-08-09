import { createGlobalStyle } from 'styled-components';
import { FuhthestBackground, TextColor } from './components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,600;1,400&family=Julius+Sans+One&display=swap');
  body{
    /* background-color: ${FuhthestBackground}; */
    background-color: #333;
    color:${TextColor};
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
