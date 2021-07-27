"use strict";

// create a list of your favorite list (books, friends...);
// Create a route for add an item
// create a route for showing all items (method: GET) *
// create a route for deleting an item (method: DELETE) *
// create a route for updating an item (method: PUT) *
// create a route to search items by name. id etc,  (method: GET) *
var fs = require('fs');

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
var hobbies = ["music", "sports", "coffee", "books", "beer", "food", "weddings", "travel"];
app.use(express["static"]('public'));
app.use(express.json());
app.get('/hobbies', function (req, res) {
  res.send(hobbies);
});
app.get('/hobbies/:hobbyNumber', function (req, res) {
  var hobby = req.params.hobbyNumber;

  if (hobbies.length < hobby + 1) {
    res.sendStatus(404);
  }

  res.send(hobbies[hobby]);
});
app.post('/hobbies', function (req, res) {
  var body = req.body;
  res.send(body);
  console.log(body);
});
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});