const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const stripe = require("stripe")(
  "sk_test_51Jn1b0AZTMnZvPdTw1HRRtSUtLaD8IahnTu4C29Z7iczvztJQC5t92zcBiaU4l7Cl8nL6lzqrcOFBYxH7aNbEEny00zh6fDW6P"
);
const app = express();
// (functions.config().stripe.secret)
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
admin.initializeApp();
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

app.get("/transactions", async (req, res) => {
  const balanceTransactions = await stripe.balanceTransactions.list({
    limit: 12,
  });
  res.status(200).send(balanceTransactions);
  console.log("Balance is:", balanceTransactions);
});

exports.api = functions.https.onRequest(app);

exports.logActivities = functions.firestore
  .document("/{collection}/{id}")
  .onCreate((snap, context) => {
    console.log(snap.data());
    const collection = context.params.collection;
    const id = context.params.id;

    const activities = admin.firestore().collection("activities");
    // const data = admin.messaging
    if (collection === "requests") {
      return activities.add({ text: "A new requests was added" });
    }

    return null;
  });
