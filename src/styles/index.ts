import { createGlobalStyle } from 'styled-components';
import { FuhthestBackground, TextColor } from './components';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
