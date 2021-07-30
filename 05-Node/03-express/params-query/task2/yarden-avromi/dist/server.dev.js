"use strict";

var express = require('express');

app = express();
var PORT = process.env.PORT || 3000;
app.use(express["static"]('public'));

function outside() {
  var jokes = [];

  function inside(joke) {
    jokes.push(joke);
  }

  return inside;
}

var addJoke = outside();
app.post('/sendJoke', function (req, res) {
  var joke = req.body.joke;
  console.log(joke);
  res.send({
    send: "OK"
  });
});
app.listen(PORT, function () {
  return console.log("listening on port ".concat(PORT, "!"));
});