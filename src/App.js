import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import styled from "styled-components";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Container1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
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
