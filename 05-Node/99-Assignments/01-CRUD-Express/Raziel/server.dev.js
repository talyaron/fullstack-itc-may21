"use strict";

var express = require('express');

var app = express();

var _require = require("uuid"),
    uuidv4 = _require.v4;

var port = process.env["const"] || 3500;

var fs = require("fs");

var path = require("path");

var filepath = path.resolve(__dirname, "transactions.json");
app.use(express["static"]("public"));
app.use(express.json());

function readTransaction() {
  try {
    var transaction = fs.readFileSync(filepath);
    console.log(transaction);
    return JSON.parse(transaction);
  } catch (error) {}
}

app.get('/allTransactions', function (req, res) {
  var transaction = readTransaction();
  res.send(transaction);
});
app.post('/addTransaction', function (req, res) {
  var _req$body = req.body,
      text = _req$body.text,
      amount = _req$body.amount;
  var transaction = readTransaction();
  console.log(req.body);
  var newTransaction = {
    text: text,
    amount: amount,
    id: uuidv4()
  };
  console.log(newTransaction);
  transaction.push(newTransaction); // console.log(transaction);

  fs.writeFileSync("./transactions.json", JSON.stringify(transaction));
  res.send(transaction);
});
app["delete"]('/deleteTransaction/:id', function (req, res) {
  var id = req.params.id;
  var transaction = readTransaction();
  var deletedTrans = transaction.filter(function (trans) {
    return trans.id !== id;
  });
  fs.writeFileSync("./transactions.json", JSON.stringify(deletedTrans));
  res.send(deletedTrans);
});
app.put('/editTransaction/:id', function (req, res) {
  var id = req.params.id;
  var _req$body2 = req.body,
      newText = _req$body2.newText,
      newAmount = _req$body2.newAmount;
  var transaction = readTransaction();
  var updateTransaction = transaction.find(function (trans) {
    return trans.id == id;
  });

  if (updateTransaction > -1) {
    transaction[updateTransaction].text = newText;
    transaction[updateTransaction].amount = newAmount;
    fs.writeFileSync("./transactions.json", JSON.stringify(transaction));
    res.send({
      message: 'A task was updated',
      transaction: transaction
    });
  } else {
    res.send({
      message: 'Couldnt find a transaction to update'
    });
  }
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});