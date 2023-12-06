import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
/* *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

body {
  
  min-height: 100vh;
  background: linear-gradient(to bottom,rgb(228, 194, 240), #350048);
  /* display: grid; */
   place-content: center;
  text-align: center;

}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;

export default GlobalStyles;