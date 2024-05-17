import styled from "styled-components";
import Carousel from "./Carousel/Carousel";

export default function TechBoard() {
  return (
    <ConatainerTechBoard>
      <h2>my tech stack & skills</h2>
      <Carousel />
    </ConatainerTechBoard>
  );
}

// styled-components

const ConatainerTechBoard = styled.div`
  width: 60vw;
  background-color: rgba(170, 170, 170, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 75%;
  border-bottom-right-radius: 75%;
  box-shadow: 1px 2px 40px #000;
`;
