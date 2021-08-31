// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");

// const stripe = require("stripe")(
//   "sk_test_51JQGSdSI9WFWOgEp1Pss9EoiVLiFXhfIetLLqoladzP8mw1Yo4uumEtflHwhjJ7wWbJhvtXx5gZRku8we59HS6eO00yQHeWn8B"
// );
// //API

// // -App config
// const app = express();

// //middleware
// app.use(cors({ origin: true }));
// app.use(express.json());

// //-API routes
// app.get("/", (req, res) => res.status(200).send("hello world"));
// app.post("/payments/create", async (req, res) => {
//   const total = req.query.total;
//   console.log("Payment Request !!!!", total);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });
//   //ok created
//   res.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// //-listen command

// exports.api = functions.https.onRequest(app);
// //http://localhost:5001/benze-ecommerce/us-central1/api
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "pk_test_51JQGSdSI9WFWOgEpy2GpQ0RG0TA9gCG2awEm0ppJI2KeZmnvLHqrc8ttGWsnCwode8i5WYfiGpJkEjP6RgwCYoPA00iMnA2lwf"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
