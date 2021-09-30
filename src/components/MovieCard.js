import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieCard(props) {
  const { data } = props;
  return (
    <Card>
      <Link to={`/movie/${data.imdbID}`}>
        <Inner>
          <Top>
            <img src={data.Poster} alt={data.Title} />
          </Top>

          <Bottom>
            <Info>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </Info>
          </Bottom>
        </Inner>
      </Link>
    </Card>
  );
}

const Card = styled.div`
  background: #1a242f;
  cursor: pointer;

  transition: all 0.3s;
  min-height: 450px;
  height: 100%;
  margin: 10px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
`;
const Top = styled.div`
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    
`;
const Inner = styled.div``;

const Bottom = styled.div`
  padding: 20px;
`;
const Info = styled.div`
  color: #ffffff;

  h4 {
    font-size: 20px;
    font-weight: 550;
    margin-bottom: 10px;
    margin-top: 3px;
  }
`;
export default MovieCard;
