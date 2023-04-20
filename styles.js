import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #22262F;
    margin: 10px;
    color: whitesmoke;
    display: flex;
    justify-content: center;
  }

  Article {
    background-color: #32363F;
  }
`;
