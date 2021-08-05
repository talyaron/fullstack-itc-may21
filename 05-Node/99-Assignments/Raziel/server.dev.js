"use strict";

var express = require('express');

var app = express();
var port = process.env["const"] || 3500;

var fs = require("fs");

var _require = require("uuid"),
    uuidv4 = _require.v4;

var path = require("path");

var filepath = path.resolve(__dirname, "EntryList.json");
app.use(express["static"]("public"));
app.use(express.json());

var readAllEntery = function readAllEntery() {
  var allEntery = fs.readFileSync(filepath);
  console.log(allEntery);
  return JSON.parse(allEntery);
};

var allEntery = fs.readFileSync(filepath);
console.log(allEntery);
app.post('/addExpense', function (req, res) {
  try {
    var _req$body = req.body,
        type = _req$body.type,
        title = _req$body.title,
        amount = _req$body.amount;
    var newExpense = {
      type: type,
      title: title,
      amount: amount,
      id: uuidv4()
    };
    console.log(newExpense);

    var _allEntery = readAllEntery();

    _allEntery.push(newExpense);

    console.log(_allEntery);
    fs.writeFileSync("./EntryList.json", JSON.stringify(_allEntery));
    res.send(_allEntery);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.listen(port, function () {
  console.log('Server listen on port', port);
});