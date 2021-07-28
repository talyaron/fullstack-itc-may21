"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var app = express();
var port = process.env.PORT || 3009;

var fs = require("fs");

var _require = require("uuid"),
    uuidv4 = _require.v4; //Id for the users


app.use(express.json());

function readfile() {
  var users = fs.readFileSync("./Raziel/.users.json");
  return JSON.parse(users); //<---/
}

var allusers = readfile();
app.get("/users", function (req, res) {
  console.log(allusers);
  res.send(allusers);
}); //add user

app.post("/users", function (req, res) {
  var user = req.body;

  var userWithId = _objectSpread({}, user, {
    id: uuidv4()
  });

  allusers.push(userWithId);
  fs.writeFileSync("./users.json", JSON.stringify(allusers));
  res.send(allusers);
}); // find user

app.get("/:id", function (req, res) {
  var id = req.params.id;
  var foundUser = allusers.find(function (user) {
    return user.id == id;
  });
  res.send(foundUser);
}); //delete user

app["delete"]("/:id", function (req, res) {
  var id = req.params.id;
  allusers = allusers.filter(function (user) {
    return user.id !== id;
  });
  res.send(allusers);
}); //edit user

app.put("/:id", function (req, res) {
  //change it to put***********
  var id = req.params.id;
  var _req$body = req.body,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName,
      age = _req$body.age;
  var userUpdate = allusers.find(function (user) {
    return user.id == id;
  }); //***not to use () on one var. */

  if (firstName) {
    userUpdate.firstName = firstName;
  }

  if (lastName) {
    userUpdate.lastName = lastName;
  }

  if (age) {
    userUpdate.age = age;
  }

  res.send(userUpdate);
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});