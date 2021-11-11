import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTransactions, getAll } from "../features/movieSlice/movieSlice";
import { useSelector } from "react-redux";

import styled from "styled-components";
function Stripe() {
  const dispatch = useDispatch();

  const data = useSelector(getAll);
  useEffect(() => {
    dispatch(getAllTransactions());
  }, []);

  console.log("Stripe Data is:", data);

  return (
    <Outside>
      {data?.map(({ data, id }) => (
        <h4 key={id}>{id}</h4>
      ))}
    </Outside>
  );
}

const Outside = styled.div`
  width: 96%;
  height: 90vh;
  margin: 0 auto;
  padding: 10px;
`;
const Title = styled.h4`
  color: white;
`;
export default Stripe;
