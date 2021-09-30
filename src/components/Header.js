import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import userLogo from "./user.png";
import { useDispatch } from "react-redux";
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
        <Logo src={userLogo} />
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

const Logo = styled.img`
  width: 38px;
  height: 38px;
`;
const Title = styled.h4`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;
const Section1 = styled.div``;

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
      height: 37px;
      border: none;
      outline: none;

      a {
        border: none;
        outline: none;
      }
    }
    input {
      font-size: 14px;
      width: 100%;
      padding: 5px 5px 5px 10px;
      height: 38px;
      outline: none;
    }
  }
`;
export default Header;
