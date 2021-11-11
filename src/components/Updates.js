import React from "react";
import styled, { keyframes } from "styled-components";
import Santa from "./images/santa.svg";
import star from "./images/star.svg";
function Updates() {
  return (
    <Main>
      <img alt="star" src={star} style={{ width: "30px", height: "15px" }} />

      <h1>December 2021 offer !!!</h1>
      <img alt="star" src={star} style={{ width: "30px", height: "45px" }} />

      <h3>Rent /Buy any movie or show with flat 50% discount !!!!</h3>
      <img alt="star" src={star} style={{ width: "30px", height: "25px" }} />

      <Image src={Santa} />
      <img
        alt="star"
        src={star}
        style={{
          width: "30px",
          height: "55px",
          position: "relative",
          right: "-20px",
        }}
      />
    </Main>
  );
}

const Main = styled.div`
  min-height: 60vh;
  max-height: fit-content;
  border-radius: 25px;
  border: 5px solid white;
  text-align: center;
  width: 80%;
  background-image: url("https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?cs=srgb&dl=pexels-jakub-novacek-924824.jpg&fm=jpg");
  background-size: cover;
  background-color: #000000;

  h1 {
    color: #00ff99;
    padding-top: 2%;
    font-size: 1.7em;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 50%;
  height: 30vh;
`;

export default Updates;
