const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.createStripeCheckout = functions.https.onCall((data, context) => {
  const stripe = require('stripe')(functions.config().stripe.secret_key);
  const session = stripe.checkout.session.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhot:19002/success",
    cancel_url: "http://localhot:19002/cancel"
  })
})
