"use strict";

/* create login page
show the name in all other pages (create the 2-page site) */
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var fs = require("fs");

var cookieParser = require('cookie-parser'); //Uuidv4 is to generate a new ID


var _require = require('uuid'),
    uuidv4 = _require.v4;

uuidv4(); //Joi is to validate the data I enter:

var Joi = require("joi");

app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser()); //This function is to read the array (I create this so the information will be kept even if I turn off the server)

function readJsonAllUsers() {
  try {
    var usersList = fs.readFileSync("./allUsers.json");
    return JSON.parse(usersList);
  } catch (error) {
    console.error(error);
  }

  ;
}

; //Route to create a User

app.post('/createUser', function (req, res) {
  try {
    var body = req.body;
    var schema = Joi.object({
      nameUser: Joi.string().max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {
          allow: ['com', 'net']
        }
      }).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    });

    var _schema$validate = schema.validate({
      nameUser: body.nameUser,
      email: body.email,
      password: body.password
    }),
        _error = _schema$validate.error,
        value = _schema$validate.value;

    if (!_error) {
      var user = {
        id: uuidv4(),
        dateCreated: Date.now(),
        nameUser: value.nameUser,
        email: value.email,
        password: value.password
      };
      var allUsers = readJsonAllUsers();
      allUsers.push(user);
      fs.writeFileSync("./allUsers.json", JSON.stringify(allUsers));
      res.send({
        message: 'A new User was added',
        users: allUsers
      });
    } else {
      var msg = _error.details[0].message;
      res.status(400).send(msg);
    }
  } catch (error) {
    console.error(error);
  }

  ;
}); //Route to login a User

app.post('/login', function (req, res) {
  try {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password;
    var allUsers = readJsonAllUsers();
    var userExist = allUsers.find(function (user) {
      return user.email === email && user.password === password;
    });

    if (userExist) {
      var nameUser = userExist.nameUser;
      var userCookie = JSON.stringify({
        nameUser: nameUser,
        email: email
      });
      res.cookie('cookieName', userCookie, {
        maxAge: 300000000,
        httpOnly: true
      });
      res.send({
        userInfo: userExist
      });
    } else {
      res.send({
        message: 'Username or password are wrong, try again!',
        userInfo: null
      });
    }
  } catch (e) {
    res.status(400).send(error);
  }
});
app.get('/userInfo', function (req, res) {
  try {
    //Read cookies
    var cookieName = req.cookies.cookieName;
    var cookie = JSON.parse(cookieName);
    res.send({
      cookie: cookie
    });
  } catch (error) {
    console.error(error);
  }
}); //This function is to listen to the port

app.listen(port, function () {
  try {
    console.log("The server is running at port: ".concat(port));
  } catch (error) {
    res.status(500).send(error);
  }
});