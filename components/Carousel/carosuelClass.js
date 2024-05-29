import styled, { keyframes } from "styled-components";

const calcVerschiebung = 360 / 10;
const verschiebung = calcVerschiebung + "deg";

const rotate360 = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 220px;
  margin: 100px auto 50px auto;
  perspective: 1200px;
`;

export const CarouselStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: ${rotate360} 32s infinite forwards linear;
`;
export const CarouselFace = styled.div`
  position: absolute;
  width: 200px;
  height: 90px;
  top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;

  &:nth-child(1) {
    transform: rotateY(calc((1 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(2) {
    transform: rotateY(calc((2 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(3) {
    transform: rotateY(calc((3 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(4) {
    transform: rotateY(calc((4 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(5) {
    transform: rotateY(calc((5 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(6) {
    transform: rotateY(calc((6 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(7) {
    transform: rotateY(calc((7 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(8) {
    transform: rotateY(calc((8 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(9) {
    transform: rotateY(calc((9 - 1) * ${verschiebung})) translateZ(430px);
  }
  &:nth-child(10) {
    transform: rotateY(calc((10 - 1) * ${verschiebung})) translateZ(430px);
  }
`;

export const Span = styled.span`
  margin: auto;
`;
