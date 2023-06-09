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
    font-family: 'Roboto', sans-serif;
  }

  Article {
    background-color: #32363F;
    box-shadow: 0 2px 8px -1px black;
  }

  h2{
    padding-top: 10px;
  }

  .description{
    font-size: 0.4em;
    font-weight: 300;
    color: #bbb;
  }
`;
