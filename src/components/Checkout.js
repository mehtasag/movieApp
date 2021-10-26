// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { Link } from "react-router-dom";
// function Checkout(props) {
//   const [fil, setFil] = useState([]);
//   const [clientSecret, setClientSecret] = useState(true);
//   const stripe = useStripe();
//   const history = useHistory();
//   const elements = useElements();

//   const billingAddress = {
//     email,
//   };
//   useEffect(() => {
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         url: `/order/create?total=${3.99 * 100} `,
//       });

//       setClientSecret(response.data.clientSecret);
//     };
//   }, []);

//   console.log("Secret is ", clientSecret);
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     try {
//       const payload = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: billingAddress,
//         },
//       });
//       if (payload.error) {
//         setError(`Payment failed ${payload.error.message}`);
//         setProcessing(false);
//       } else {
//         setError(null);
//         setProcessing(false);
//         setSucceeded(true);
//         // history.push("/");

//         console.log("payload", payload.paymentIntent.id);
//       }

//       const notify = () =>
//         toast.dark(`Succeeded... your order no is ${payload.paymentIntent.id}`);

//       notify();
//     } catch (err) {
//       console.log("Error", err);
//     }
//   };

// const iframeStyles = {
//   base: {
//     color: "white",
//     fontSize: "16px",
//     iconColor: "black",
//     "::placeholder": {
//       color: "white",
//     },
//   },
//   invalid: {
//     iconColor: "gray",
//     color: "#FFC7EE",
//   },
//   complete: {
//     iconColor: "green",
//   },
// };

// const cardElementOpts = {
//   iconStyle: "solid",
//   style: iframeStyles,
//   hidePostalCode: true,
// };

//   return (
//     <div className="checkout">
//       <form className="subtotal__stripe">
//         <h5>Complete your payment</h5>

//         {/* <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         /> */}
//         <br />
//         {/* <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         /> */}
//         <br />

//         <CardElement
//           className="subtotal__stripe1"
//           onChange={handleChange}
//           options={cardElementOpts}
//         />

//         <div className="checkout__button">
//           <Button
//             onClick={handleSubmit}
//             disabled={processing || disabled || succeeded}
//           >
//             {processing
//               ? "Processing"
//               : `Proceed to pay $ ${getBasketTotal(basket)}`}
//           </Button>
//         </div>
//         <p className="checkout__trouble">
//           Having trouble? {"  "}
//           <Link to="/sales">
//             <Button className="checkout__contactUs">Contact Us</Button>
//           </Link>
//         </p>
//       </form>

//       {/* <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={true}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       /> */}
//     </div>
//   );
// }

// export default Checkout;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../features/movieSlice/movieSlice";

import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

function Checkout() {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const data = useSelector(getSelectedMovieOrShow);

  // Stripe
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();

  const elements = useElements();
  const history = useHistory();
  useEffect(() => {
    // const getClientSecret = async () => {
    //   const response = await axios({
    //     method: "post",
    //     url: `/pay`,
    //   });
    //   console.log("Response is:", response);
    //   setClientSecret(response.data.clientSecret);
    // };

    // getClientSecret();
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  console.log("Secret is:", clientSecret);
  // console.log("Data is", data);

  // Stripe Design
  const iframeStyles = {
    base: {
      color: "white",
      fontSize: "17px",

      backgroundColor: "grey",
      iconColor: "blue",
      "::placeholder": {
        color: "white",
      },
    },
    invalid: {
      iconColor: "gray",
      color: "#FFC7EE",
    },
    complete: {
      iconColor: "green",
    },
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };

  // Payment Intent

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post(
          "https://us-central1-movieapp2021-8ad8c.cloudfunctions.net/api/payment",
          {
            amount: 399,
            id,
          }
        );

        if (response.data.success) {
          console.log("Payment successful", response);
          setSucceeded(true);
        } else {
          console.log("Error:");
        }
      } catch (e) {
        console.log(Error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <Main>
      <Left>
        <h3>{data.Title}</h3>
        <img src={data.Poster} />
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
        <h4>Note befor you purchase:</h4>

        <li>
          As soon as you purchase movie/show, you will get access for 24/hrs
          only.
        </li>
        <li>
          Payment won't be refunded as soon as you started streaming on your
        </li>
        <form
          onSubmit={handleSubmit}
          style={{ height: "100px", width: "90%", marginTop: "20px" }}
        >
          <h4>Complete your payment now! </h4>
          <CardElement options={cardElementOpts} onChange={handleChange} />
        </form>
        <Pay
          onClick={handleSubmit}
          disabled={processing || disabled || succeeded}
        >
          {processing ? <p>Processing...</p> : "Pay Now $ 3.99"}
        </Pay>
        {error && <div>{error}</div>}
      </Right>
    </Main>
  );
}

const Main = styled.div`
  color: white;
  min-height: 84.6vh;
  max-height: 100%;
  display: flex;
  justify-content: space-evenly;
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    width: fit-content;
  }
`;
const Pay = styled.div`
  widht: 30px;
  background: #247cf0;
  color: white;
  margin: 30px 20%;
  cursor: pointer;
  font-weight: bold;
  border-radius: 14px;
  padding: 10px 15px;
  text-align: center;
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
const Left = styled.div``;
const Right = styled.div`
  margin-right: 6%;

  h4 {
    margin-top: 10px;
    font-size: 1.1rem;
    border-bottom: 2px solid white;
    color: grey;
  }

  li {
    margin-top: 12px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #ff8589;
  }
`;
export default Checkout;
