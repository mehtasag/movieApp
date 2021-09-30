import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Main>
      <Title>Movie App</Title>
      <div>©2021, Movie, Inc. or its affiliates</div>
    </Main>
  );
}
const Main = styled.div`
  background: #1a242f;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
`;

const Title = styled.h4``;
export default Footer;
