import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 13px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: 13px solid #9b59b6;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite;
  opacity: 0.15;
`;

export default () => (
  <Container>
    <Loader />
  </Container>
);
