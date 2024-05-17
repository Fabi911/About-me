import styled, { keyframes } from "styled-components";

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
  animation: ${rotate360} 60s infinite forwards linear;
`;
export const CarouselFace = styled.div`
  position: absolute;
  width: 200px;
  height: 90px;
  top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    transform: rotateY(0deg) translateZ(430px);
  }
  &:nth-child(2) {
    transform: rotateY(36deg) translateZ(430px);
  }
  &:nth-child(3) {
    transform: rotateY(72deg) translateZ(430px);
  }
  &:nth-child(4) {
    transform: rotateY(108deg) translateZ(430px);
  }
  &:nth-child(5) {
    transform: rotateY(144deg) translateZ(430px);
  }
  &:nth-child(6) {
    transform: rotateY(180deg) translateZ(430px);
  }
  &:nth-child(7) {
    transform: rotateY(216deg) translateZ(430px);
  }
  &:nth-child(8) {
    transform: rotateY(252deg) translateZ(430px);
  }
  &:nth-child(9) {
    transform: rotateY(288deg) translateZ(430px);
  }
  &:nth-child(10) {
    transform: rotateY(324deg) translateZ(430px);
  }
`;

export const Span = styled.span`
  margin: auto;
`;
