import React from "react";
import styled from "styled-components";
function Offering() {
  return (
    <MainCard>
      <h3>This month's offers</h3>
      <Card>
        <h2>November Discount</h2>
        <p>Use the following code to avail discount</p>
        <h4>Use Code :</h4>
        <h3>NOV20</h3>

        <h5>Flat 20% off on all </h5>
      </Card>
      <h3>Up coming offers on Chrismas</h3>
      <MainCard1>
        <Card1>
          <h2>December Discount</h2>
          <p>Use the following code to avail discount</p>
          <h4>Use Code :</h4>
          <h3>MERRY40</h3>
          <h5>Flat 40% off on all </h5>
        </Card1>

        <Card1>
          <h2>December Discount</h2>
          <p>Use the following code to avail discount</p>
          <h4>Use Code :</h4>
          <h3>MERRY40</h3>
          <h5>Flat 40% off on all </h5>
        </Card1>
        <Card1>
          <h2>December Discount</h2>
          <p>Use the following code to avail discount</p>
          <h4>Use Code :</h4>
          <h3>MERRY40</h3>
          <h5>Flat 40% off on all </h5>
        </Card1>
      </MainCard1>
    </MainCard>
  );
}

const MainCard = styled.div`
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  * {
    h5 {
      margin-top: 15px;
    }
  }
`;
const MainCard1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  padding: 50px 0;
  border: 4px solid gray;
  // background-color: #0093e9;
  background-color: #b53f00;
  border-radius: 25px;

  background-image: linear-gradient(
    160deg,
    #0093e9 0%,
    #051d50 99%,
    #ffffff 100%
  );
  h2 {
    font-size: 1.6rem;
    font-weight: 800;
    text-align: center;
    // color: #263238;
    color: #eb6709;
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }

  h4 {
    font-size: 1rem;
    font-weight: 800;
    color: #ffe1c4;
    padding-bottom: 1rem;
    padding-top: 0.4rem;
  }
  h3 {
    padding: 8px;
    font-size: 1.2rem;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    color: #c3f7f2;
    border-radius: 20px;
    background: transparent;
    border: 2px solid #fff;

    &:hover {
      background: black;
      color: white;
      cursor: pointer;
    }
  }
`;

const Card1 = styled(Card)`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 98%,
    #ffcc70 100%
  );
  margin-bottom: 1.7em;
`;

export default Offering;
