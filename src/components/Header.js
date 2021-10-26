import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movieSlice/movieSlice";
function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("You searched", term);

    if (term === "") return alert("Please enter a term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };
  return (
    <Container>
      <Link to="/">
        <Title>Movies App</Title>
      </Link>
      <Search>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={term}
            placeholder="Search your favourite movies or shows"
            onChange={(e) => setTerm(e.target.value)}
          />

          <button type="submit">
            <i type="submit" className="fa fa-search" />
          </button>
        </form>
      </Search>
      <Section1>
        <Dropdown />
      </Section1>
    </Container>
  );
}

const Container = styled.div`
  background: #1a242f;
  height: 72px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;
const Section1 = styled.div`
  // display: flex;
  // justify-content: space-between;

  // h3 {
  //   font-size: 14px;
  //   color: gray;
  //   text-align: center;
  //   justify-content: center;
  //   margin-top: 10%;
  //   margin-left: 8px;
  // }
  // .fas {
  //   position: absolute;
  //   top: 3%;
  //   right: 1.1%;
  //   display: block;
  //   margin-left: 8px;
  //   color: #354a60;
  //   cursor: pointer;
  // }
`;

const Search = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  form {
    display: flex;
    justify-content: center;
    width: 70%;

    button {
      padding: 0px 8px;
      font-size: 20px;
      cursor: pointer;
      height: 36px;
      border: none;
      outline: none;
      color: #0971e3;

      a {
        border: none;
        outline: none;
      }
    }
    input {
      font-size: 14px;
      width: 100%;
      padding: 5px 5px 5px 10px;
      height: 36px;
      background-color: #354a60;
      border: 1px solid #fff;
      outline: none;
      color: white;
    }
  }
`;
export default Header;
