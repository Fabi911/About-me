import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-image: url('/img/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items:center;
  }

  
`;

export default GlobalStyle;
