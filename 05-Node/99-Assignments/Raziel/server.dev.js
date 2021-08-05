"use strict";

var express = require('express');

var app = express();
var port = process.env["const"] || 3500;

var fs = require("fs");

app.use(express["static"]("public"));
app.use(express.json());

var readAllEntery = function readAllEntery() {
  var allEntery = fs.readFileSync("./EntryList.json");
  return JSON.parse(allEntery);
};

var allEntery = readAllEntery();
app.post('/addExpense', function (req, res) {
  var _req$body = req.body,
      type = _req$body.type,
      title = _req$body.title,
      amount = _req$body.amount;
  var newExpense = {
    type: 'expense',
    title: title,
    amount: amount
  };
  allEntery.push(newExpense);
  fs.writeFileSync("./EntryList.json", JSON.stringify(allEntery));
  console.log(allEntery);
  res.send({
    ok: "Added Expense",
    task: allEntery
  });
}); // app.post('/addIncome',(req, res) => {
//     const {type, title,amount} = req.body;
//     const newIncome={
//         type: 'income',
//         title: title,
//         amount: amount
//     }
//  const allEntery = readAllEntery();
//  allEntery.push(newIncome);
//  fs.writeFileSync("./EntryList.json", JSON.stringify(allEntery ));
// console.log(allEntery);
//         res.send({ ok: "Added Expense", task:allEntery  });
// })

app.listen(port, function () {
  console.log('Server listen on port', port);
});