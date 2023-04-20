import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;


    
  }

  body {
    margin: 0;
    background-color: #22262F;
    margin: 10px;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    font-family: 'monospace','Roboto', sans-serif;

  }

  Article {
    background-color: #32363F;
  }

  h2{
    padding-top: 10px;
  }
`;
