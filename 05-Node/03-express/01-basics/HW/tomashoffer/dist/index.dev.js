"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();
var port = 3000;

var bodyParser = require('body-parser');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var friendsJson = require('./friends'); // PUSHING DEFAULT FRIEND OF OUR LIST


var friends = [];
friends.push(friendsJson);
console.log(friends); // INITIALIZE BODYPARSER

app.use(bodyParser.json()); // INDEX

app.get('/', function (req, res) {
  res.send('Hello World');
}); // GET ALL FRIENDS

app.get('/getFriends', function (req, res) {
  res.send({
    friends: friends
  });
}); // ADD A FRIEND WITH A NAME AND AGE

app.post('/postFriends', function (req, res) {
  var friend = req.body;
  friends.push(_objectSpread({}, friend, {
    id: uuidv4()
  }));
  res.send({
    friends: friends
  });
  console.log("You had add a friend");
}); // SEARCH FRIEND BY NAME 

app.get('/searchFriend/:name', function (req, res) {
  var name = req.params.name;
  var searchedFriend = friends.filter(function (friend) {
    return friend.name === name;
  });
  res.send({
    searchedFriend: searchedFriend
  });
  console.log("You have search to your friend: ".concat(name));
}); // DELETE FRIEND BY NAME 

app["delete"]('/deleteFriends/:name', function (req, res) {
  var name = req.params.name;
  var deleteFriend = friends.filter(function (friend) {
    return friend.name !== name;
  });
  friends = deleteFriend;
  res.send({
    deleteFriend: deleteFriend
  });
  console.log("The friend ".concat(name, " has been deleted"));
}); // UPDATE FRIEND NAME AND AGE BY ID

app.put('/updateFriends/:id', function (req, res) {
  var id = req.params.id;
  var _req$body = req.body,
      name = _req$body.name,
      age = _req$body.age;
  var friendUpdate = friends.find(function (friend) {
    return friend.id === id;
  });
  if (name) friendUpdate.name = name;
  if (age) friendUpdate.age = age;
  res.send(friends);
});
app.listen(port, function () {
  console.log("Running on server ".concat(port));
}); // create a list of your favorite list (books, friends...); -> LISTO
// Create a route for add an item -> LISTO
// create a route for showing all items (method: GET) -> LISTO
// create a route for deleting an item (method: DELETE) -> LISTO
// create a route for updating an item (method: PUT)
// create a route to search items by name. id etc,  (method: GET) ->LISTO