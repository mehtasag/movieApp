import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTransactions } from "../features/movieSlice/movieSlice";
import axios from "axios";
function Stripe() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, []);

  //   const data = async () => {
  //     const response = await axios.get(
  //       "https://us-central1-movieapp2021-8ad8c.cloudfunctions.net/api/transactions"
  //     );

  //     console.log("Stripe data:", response.data);
  //   };

  //   data();

  return <div>Here is your transactions</div>;
}

export default Stripe;
