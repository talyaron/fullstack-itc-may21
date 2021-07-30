"use strict";

var express = require("express");

var app = express();
var port = process.env.port || 5000;

var fs = require("fs");

app.use(express["static"]("public"));
app.use(express.json());

var readAllBeve = function readAllBeve() {
  var allBeve = fs.readFileSync('./beve.json');
  return JSON.parse(allBeve);
};

app.get("/getBeve", function (req, res) {
  var allBeve = readAllBeve();
  res.send(allBeve);
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});