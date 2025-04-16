import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3a86ff;
    --text-color: #333;
    --bg-color: #fff;
    --light-bg: #f8f9fa;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  
  img {
    max-width: 100%;
  }
  
  button {
    cursor: pointer;
  }
  
  /* RTL Support */
  [dir="rtl"] {
    text-align: right;
  }
`;

export default GlobalStyle;
