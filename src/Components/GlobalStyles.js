import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 50px;
    background-color: rgba(20, 20, 20, 1);
    font-size: 14px;
    color: #fff;
  }
  body,
  html,
  #root {
    height: 100%;
  }
  `;

export default globalStyles;
