import styled from "styled-components";

export default function Board() {
  return <ContainerProjectBoard></ContainerProjectBoard>;
}

const ContainerProjectBoard = styled.div`
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
