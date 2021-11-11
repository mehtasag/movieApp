import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import styled from "styled-components";
import Stripe from "./components/Stripe";
import "./App.css";
import Checkout from "./components/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Notification from "./components/Notification";
// Import Stripe Component

function App() {
  const promise = loadStripe(
    "pk_test_51Jn1b0AZTMnZvPdTQVnEymW1Q3t1aaEZ5gvFmXmwGZLPIeJOV6hnZ6QSZQq8qnpdJ0L2YpwFvdIfgngoab7thxhx00uf5r0VK5"
  );
  return (
    <div className="app">
      <Router>
        <Header />
        <Container1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/movie/:imdbID" component={MovieDetail} />
            <Route exact path="/stripe" component={Stripe} />
            <Route exact path="/notifications" component={Notification} />
            <Route exact path="/checkout/:imdbID">
              <Elements stripe={promise}>
                <Checkout />
              </Elements>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Container1>
        <Footer />
      </Router>
    </div>
  );
}

const Container1 = styled.div`
  margin: 0px 40px;
`;
export default App;
// {
//   primary-color: #0f171e;
//   secondary: #1a242f
// 32a9677

//   fontPrimay: #ffffff;
//    fontsecnd: #79b8f3
// }
