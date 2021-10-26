const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51Jn1b0AZTMnZvPdTw1HRRtSUtLaD8IahnTu4C29Z7iczvztJQC5t92zcBiaU4l7Cl8nL6lzqrcOFBYxH7aNbEEny00zh6fDW6P"
);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("data is");
});

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: id,
      confirm: true,
    });

    console.log("Payment: ", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error payment",
      success: false,
    });
  }
});

// app.listen(process.env.PORT, () => {
//   console.log("Listening on 5001");
// });
exports.api = functions.https.onRequest(app);
