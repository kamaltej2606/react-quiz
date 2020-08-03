import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const json2csv = require("json2csv").parse;
exports.csvJsonReport = functions.https.onRequest((request, response) => {

  const db = admin.firestore();
  const ordersRef = db.collection('messeges');
  return ordersRef.get()
    .then((querySnapshot) => {
      const orders = [];

      querySnapshot.forEach(doc => {
        const order = doc.data();
        orders.push(order);
      });
      const csv = json2csv(orders);
      response.setHeader(
        "Content-disposition",
        "attachment; filename=report.csv"
      );
      response.set("Content-Type", "text/csv");
      response.status(200).send(csv)
    }).catch((err) => {
      console.log(err);
    });

});