import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    background-color: #f2f2f2;
  }

  .mysidenav {
    background-color: teal !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .page {
    font-size: 5rem !important;
    text-align: center !important;
  }

`;

export default Global;