import styled from "styled-components";

export default function AboutMe() {
  return (
    <ContainerAboutMe>
      <h2>about me</h2>
      <ContainerTextAboutMe>
        sdfg hjklsdfghjkl fdghjklds afghjksdfgdfg sf sfhkusfhksfgjk h fskjfskjh
        fs khdfhks fskjdfhs kjhksfh jhksf hsf h
      </ContainerTextAboutMe>
    </ContainerAboutMe>
  );
}

// styled-components

const ContainerTextAboutMe = styled.article`
  width: 65%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContainerAboutMe = styled.div`
  width: 60vw;
  margin-top: 60px;
  background-color: rgba(170, 170, 170, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 75%;
  border-top-right-radius: 75%;
  box-shadow: 1px 2px 40px #000;
`;
