"use strict";

var _require = require('crypto'),
    randomUUID = _require.randomUUID;

var express = require('express');

var app = express(); //app is using express

app.use(express.json());

var fs = require('fs');

var _require2 = require('uuid'),
    uuidv4 = _require2.v4;

var port = 3000; //helpers

var readAllUsers = function readAllUsers() {
  var allUsers = fs.readFileSync('./user.json'); //async     

  return JSON.parse(allUsers); //original form
}; //Read Data


app.get('/', function (req, res) {
  var allUsers = readAllUsers();
  res.send(allUsers);
});
app.post('/', function (req, res) {
  var name = req.body.name; //requested from the client

  var newUser = {
    name: name,
    id: uuidv4()
  };
  var allUsers = readAllUsers();
  allUsers.push(newUser);
  fs.writeFileSync('./user.json', JSON.stringify(allUsers));
  res.send(allUsers);
});
app["delete"]('/:id', function (req, res) {
  //parametro id /users/:id/:firstname
  //http://localhost:3000/123  123 is param
  var id = req.params.id;
  var allUsers = readAllUsers();
  var userIndex = allUsers.findIndex(function (user) {
    return user.id === id;
  });
  allUsers.splice(userIndex, 1);
  fs.writeFileSync('./user.json', JSON.stringify(allUsers));
  res.send('User Deleted');
});
app.put('/:id', function (req, res) {
  var id = req.params.id;
  var name = req.body.name;
  var allUsers = readAllUsers();
  var nameUser = allUsers.find(function (user) {
    return user.id === id;
  });
  nameUser.name = name;
  fs.writeFileSync('./user.json', JSON.stringify(allUsers));
  res.send('User name updated');
});
app.listen(port, function () {
  console.log("App is listening on http://localhost/".concat(port));
});