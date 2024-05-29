import styled from "styled-components";
import Carousel from "./Carousel/Carousel";

export default function TechBoard() {
  return (
    <ConatainerTechBoard>
      <h2>my tech stack & skills</h2>
      <Frame />
      <Carousel />
    </ConatainerTechBoard>
  );
}

// styled-components

const ConatainerTechBoard = styled.div`
  width: 60vw;
  background-color: rgba(60, 60, 60, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
  border-radius: 5px;
  box-shadow: 1px 2px 40px #000;
  position: relative;
`;

const Frame = styled.div`
  height: 8.5rem;
  width: 62rem;
  position: absolute;
  background-color: white;
  top: 95px;
  opacity: 0.3;
  /* border: 5px ridge black; */
  border-radius: 5px;
  box-shadow: 2px 2px 5px black;
`;
