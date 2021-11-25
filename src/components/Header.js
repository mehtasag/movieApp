import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAllMovies,
} from "../features/movieSlice/movieSlice";
function Header() {
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("You searched", term);

    if (term === "") return alert("Please enter a term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };

  useEffect(() => {}, [term]);

  const data = useSelector(getAllMovies);
  console.log("Data header is:", data);
  const handleChange = (e) => {
    setTerm(e);

    let oldList = data.Search?.map((data, id) => {
      return {
        name: data?.title.toLowerCase(),
        data,
        id,
      };
    });
    console.log("Old list is: ", oldList);

    if (term !== "") {
      let newList = [];

      newList = oldList?.filter((data) =>
        data.name.includes(term.toLocaleLowerCase())
      );

      setFilter(newList);
      console.log("New List in header are:", newList);
    }
  };

  return (
    <Container>
      <Link to="/">
        <Title>Movies App 2021</Title>
      </Link>
      <Search>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={term}
            placeholder="Search your favourite movies or shows"
            // onChange={(e) => setTerm(e.target.value)}
            onChange={(e) => handleChange(e.target.value)}
          />

          <button type="submit">
            <SearchIcon
              type="submit"
              style={{
                textAlign: "center",
                alignItems: "center",
                color: "black",
                position: "relative",
                top: "3px",
                justifyContent: "center",
                fontSize: "1.4rem",
                fontWeight: "600",
              }}
            />
          </button>
        </form>
      </Search>
      <Section1>
        <Dropdown />
        <Link to="/notifications">
          <NotificationsActiveIcon
            style={{ color: "#72E8AB", marginLeft: "10px", cursor: "pointer" }}
            alt="Notifications"
          />
        </Link>
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
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
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
