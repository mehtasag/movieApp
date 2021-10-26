import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getAllMovies, getAllShows } from "../features/movieSlice/movieSlice";
import MovieCard from "./MovieCard";

import Slider from "react-slick";
function MovieList() {
  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => <MovieCard key={index} data={shows} />)
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  // console.log("Your movie list are", renderMovies);
  return (
    <MovieWrapper>
      <MoviesList>
        <h2>Latest Movies</h2>
        <MovieContainer>
          <Slider {...Settings}>{renderMovies}</Slider>
        </MovieContainer>
      </MoviesList>
      <MoviesList>
        <h2>Latest Shows</h2>

        <MovieContainer>
          <Slider {...Settings}>{renderShows}</Slider>
        </MovieContainer>
      </MoviesList>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div``;
const MoviesList = styled.div`
  margin: 20px 0px;

  h2 {
    color: #79b8f3;
    margin-bottom: 10px;
    font-weight: 400;
  }
`;

const MovieContainer = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  // grid-gap: 15px;
`;

export default MovieList;
