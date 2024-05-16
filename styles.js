import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    background-color: #303030;
    /* background: linear-gradient(90deg, 
                #303030 0%, 
                #303030 49.5%, 
                #14FBF2 50%, 
                #303030 50.5%, 
                #303030 100%); */
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items:center;
  }


`;

export default GlobalStyle;
