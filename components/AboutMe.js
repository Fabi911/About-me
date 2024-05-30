import styled from "styled-components";

export default function AboutMe() {
  return (
    <ContainerAboutMe>
      <h2>about me</h2>
      <ContainerTextAboutMe>
        Hallo Welt, ich bin Fabian Döz (34). Mein großes Interesse besteht
        darin, nicht stehen zu bleiben, sondern Neues zu lernen, Probleme zu
        analysieren und zu lösen.
        <br /> Auch mal neue Wege zu gehen, wie das erfolgreich abgeschlossene
        Bootcamp zum Web Developer bei der neueFische GmbH. <br />
        Hier habe ich meine wahre Passion gefunden. Denn für mich macht der
        Beruf des Web Developers genau das aus, Bestehendes weiter zu
        entwickeln, Fehler zu beheben und gemeinsam im Team optimale Lösungen zu
        erarbeiten.
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
  text-align: left;
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
