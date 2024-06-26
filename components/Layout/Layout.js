import styled from "styled-components";

import { Titillium_Web } from "next/font/google";

const titilliumWeb = Titillium_Web({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <main className={titilliumWeb.className}>
      <Header>
        <h1>Fabian Döz - Web Developer</h1>
      </Header>
      {children}
      <Footer>
        <p>&copy; Fabian Döz</p>
      </Footer>
    </main>
  );
}

// styled components

const Header = styled.header`
  background-color: #202020;
  color: #dfdfdf;
  width: 100vw;
  height: 5rem;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 0 0 2rem;
  left: 0;
  z-index: 100;
  box-shadow: 1px 2px 10px #000;
`;

const Footer = styled.footer`
  background-color: #202020;
  color: #dfdfdf;
  text-align: center;
  width: 100vw;
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
`;
