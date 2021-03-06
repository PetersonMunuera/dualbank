import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background: #FAFAFA;
   color: #172765;
   -webkit-font-smoothing: antialiased;
 }

 body, input, button {
   font-family: 'Lato', sans-serif;
   font-size: 14px;
 }

 h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
 }

 button {
   cursor: pointer;
 }
`