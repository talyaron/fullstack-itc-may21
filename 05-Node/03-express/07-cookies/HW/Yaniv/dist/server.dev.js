"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var express = require('express');

var fs = require('fs');

var cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 5555;
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser());

var readJson = function readJson() {
  try {
    var _users = fs.readFileSync('users.json');

    return JSON.parse(_users);
  } catch (error) {
    console.error(error);
  }
};

var Users =
/*#__PURE__*/
function () {
  function Users() {
    _classCallCheck(this, Users);

    this.usersList = readJson();
  }

  _createClass(Users, [{
    key: "updateUsersJson",
    value: function updateUsersJson() {
      try {
        fs.writeFileSync('users.json', JSON.stringify(this.usersList));
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "addUser",
    value: function addUser(user) {
      try {
        this.usersList.push(user);
        this.updateUsersJson();
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "loginUser",
    value: function loginUser(_ref) {
      var username = _ref.username,
          password = _ref.password;

      try {
        var loginUser = this.usersList;
        loginUser = loginUser.filter(function (user) {
          return user.username === username;
        });
        loginUser = loginUser.filter(function (user) {
          return user.password === password;
        });
        return loginUser;
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return Users;
}();

var users = new Users();
app.post('/register', function (req, res) {
  try {
    var registeredUser = req.body;
    users.addUser(registeredUser);
    var username = registeredUser.username;
    var cookieName = 'loggedInUser';
    res.cookie(cookieName, JSON.stringify(registeredUser), {
      maxAge: 3600000,
      httpOnly: true
    });
    console.log("".concat(username, " is saved in your ").concat(cookieName, " cookie"));
    console.log(registeredUser);
    res.send(registeredUser);
  } catch (error) {
    console.error(error);
    res.status(400).send({
      errorMsg: error.message
    });
  }
});
app.post('/login', function (req, res) {
  try {
    var typedUser = req.body;
    var loginUser = users.loginUser(typedUser);
    var resToSent = loginUser.length === 0 ? "Username and password combination doesn't exist. Please register or check again" : loginUser[0];

    if (typeof resToSent !== 'string') {
      var username = resToSent.username;
      var cookieName = 'loggedInUser';
      res.cookie(cookieName, JSON.stringify(resToSent), {
        maxAge: 3600000,
        httpOnly: true
      });
      console.log("".concat(username, " is saved in your ").concat(cookieName, " cookie"));
    }

    console.log('from json to cookie:', resToSent);
    res.send(resToSent);
  } catch (error) {
    console.error(error);
    res.status(400).send({
      errorMsg: error.message
    });
  }
});
app.get('/user', function (req, res) {
  try {
    var loggedInUser = req.cookies.loggedInUser;
    var Fetcheduser = JSON.parse(loggedInUser);
    console.log('from cookie to DOM:', Fetcheduser);
    res.send(Fetcheduser);
  } catch (error) {
    console.error(error);
    res.status(400).send({
      errorMsg: error.message
    });
  }
});
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});