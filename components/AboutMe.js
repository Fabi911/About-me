import styled from "styled-components";

export default function AboutMe() {
  return (
    <ContainerAboutMe>
      <h2>about me</h2>
      <ContainerTextAboutMe>
        Ich bin 34 Jahre alt Wohnhaft in Stavern (Emsland).
        <br />
        Ich habe schon seit meiner Kindheit eine große Leidenschaft für IT.
        <br />
        Abschluss als Web Developer bei neueFische GmbH im April 2024.
        <br />
        Umfassende Kenntnisse in HTML5, CSS3, Javascript, React, Next.js,
        Node.js und Styled Components.
      </ContainerTextAboutMe>
    </ContainerAboutMe>
  );
}

// styled-components

const ContainerTextAboutMe = styled.article`
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
`;

const ContainerAboutMe = styled.div`
  width: 60vw;
  margin-top: 60px;
  background-color: rgba(60, 60, 60, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  border-radius: 5px;
  box-shadow: 1px 2px 40px #000;
`;
