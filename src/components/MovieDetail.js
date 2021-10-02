import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../features/movieSlice/movieSlice";
import styled from "styled-components";
function MovieDetail() {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <Section>
      {Object.keys(data).length === 0 ? (
        <Loader>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Loader>
      ) : (
        <>
          <Left>
            <Title>{data.Title}</Title>
            <Rating>
              <span>
                IMDB Rating <i className="fa fa-star" /> {data.imdbRation}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up" /> {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film" /> {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar" /> {data.Year}
              </span>
            </Rating>
            <Plot>{data.Plot}</Plot>
            <Info>
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </Info>
          </Left>

          <Right>
            <img src={data.Poster} alt={data.Title} />
          </Right>
        </>
      )}
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
  min-height: 84vh;
  color: #ffffff;

  font-weight: 400;
`;
const Left = styled.div``;
const Title = styled.div`
  font-size: 40px;
  color: #ffffff;
`;

const Rating = styled.div`
  padding-left: 3px;
  margin-top: 20px;
  color: #79b8f3;
  display: flex;

  span {
    margin-right: 20px;
  }

  .fa-star {
    color: #ff9e00;
  }

  .fa-thumbs-up {
    color: #fafafa;
  }

  .fa-film {
    color: rgb(191, 213, 214);
  }

  .fa-calendar {
    color: peachpuff;
  }
`;

const Plot = styled.div`
  margin-top: 20px;
  line-height: 1.8rem;
`;
const Info = styled.div`
  div span:first-child {
    padding: 10px 0px;
    color: #ffffff;
    font-weight: 600;
    width: 100px;
    display: inline-block;
  }

  span {
    color: #79b8f3;
  }
`;
const Right = styled.div`
  margin-left: 30px;
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default MovieDetail;
