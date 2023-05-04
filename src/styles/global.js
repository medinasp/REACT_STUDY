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
    background-color: #f2f2f2 !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: blue !important;
    padding: 60px 0px 0px 30px;
  }

  .page {
    font-size: 5rem !important;
    text-align: center !important;
  }

  .nav-item {
    margin-top: 80px;
    border-radius: 100px;
    background-color: black !important;
    color: #f2f2f2 !important;
  }

  .nav-item:visited {
    background-color: red !important;
  }

  .nav-item:hover {
    background-color: gray !important;
    transition: 0.5s;
    opacity: 0.7;
  }

`;

export default Global;