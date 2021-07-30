"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));
var jokes = [];
app.post('/addJoke', function (req, res) {
  console.log(req.body); // const joke = req.body.joke;
  // jokes.push(joke);
  // console.log(jokes,joke);

  res.send({
    status: "Completed"
  });
});
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});