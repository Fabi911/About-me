import styled from "styled-components";
import { techStack } from "@/lib/db";
import Image from "next/image";

export default function TechBoard() {
  return (
    <ConatainerTechBoard>
      <h2>my tech stack & skills</h2>
      <ContainerIcons>
        {techStack.map((skill) => (
          <Image
            key={skill.name}
            src={skill.logo}
            alt={skill.name}
            style={{
              width: "auto",
              height: "5rem",
            }}
            width={150}
            height={150}
          />
        ))}
      </ContainerIcons>
    </ConatainerTechBoard>
  );
}

// styled-components

const ContainerIcons = styled.section`
  width: 50%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ConatainerTechBoard = styled.div`
  width: 60vw;
  background-color: rgba(170, 170, 170, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 75%;
  border-bottom-right-radius: 75%;
  box-shadow: 1px 2px 40px #000;
`;
