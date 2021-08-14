"use strict";

var express = require('express');

var cookieParser = require('cookie-parser');

var Ajv = require("ajv");

var _require = require('./models.js'),
    User = _require.User,
    Users = _require.Users,
    Survey = _require.Survey,
    Surveys = _require.Surveys,
    Question = _require.Question,
    Questions = _require.Questions; // Import routes


var loginRoute = require('./routes/loginRoute');

var questionsRoute = require('./routes/questionsRoute');

var surveysRoute = require('./routes/surveysRoute');

var usersRoute = require('./routes/usersRoute');

var adminRoute = require('./routes/adminRoute');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());

var _require2 = require('ajv/dist/vocabularies/applicator/dependencies'),
    error = _require2.error;

var ajv = new Ajv();
app.use(express["static"]('public'));
app.use(cookieParser());
var users = new Users(); // Route to create user

app.post('/createUser', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        username: {
          type: "string"
        },
        password: {
          type: "string"
        },
        email: {
          type: "string"
        }
      },
      required: ["username", "password", "email"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    }

    if (users.users.find(function (info) {
      return info.email === body.email;
    }) === undefined && body.password === "") {
      users.newUser(new User(body.username, body.email, ""));
      console.log('');
      console.log(users);
      var guestUser = users.users[users.users.length - 1];
      console.log(guestUser);
      var guestCookie = JSON.stringify({
        guestUser: guestUser
      });
      res.cookie('guest', guestCookie, {
        maxAge: 300000000,
        httpOnly: true
      });
      res.send(guestUser);
    } else if (users.users.find(function (info) {
      return info.email === body.email && info.password === '';
    }) != undefined) {
      users.users.find(function (info) {
        return info.email === body.email;
      }).password = body.password;
      users.users.find(function (info) {
        return info.email === body.email;
      }).name = body.username;
      console.log(users);
      res.send(users);
    } else if (users.users.find(function (info) {
      return info.email === body.email && info.password != '' && body.password === "";
    }) != undefined) {
      var _guestUser = users.users.find(function (info) {
        return info.email === body.email;
      });

      console.log(_guestUser);

      var _guestCookie = JSON.stringify({
        guestUser: _guestUser
      });

      res.cookie('guest', _guestCookie, {
        maxAge: 300000000,
        httpOnly: true
      });
      res.send(_guestUser);
    } else if (users.users.find(function (info) {
      return info.email === body.email;
    }) != undefined) {
      res.send("Email already taken!");
    } else {
      users.newUser(new User(body.username, body.email, body.password));
      res.send(users);
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
});
app.get('/getAllUsers', function (req, res) {
  res.send(users);
}); // Login route

app.post('/login', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        password: {
          type: "string"
        },
        email: {
          type: "string"
        }
      },
      required: ["password", "email"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    }

    console.log(users);
    console.log(users.users);
    var selectedAdmin = users.users.find(function (r) {
      return r.email === body.email && r.password === body.password;
    });
    var adminCookie = JSON.stringify({
      selectedAdmin: selectedAdmin
    });
    res.cookie('admin', adminCookie, {
      maxAge: 300000000,
      httpOnly: true
    });
    console.log(selectedAdmin);
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
}); // Route to add a survey

app.post('/addSurvey', function (req, res) {
  try {
    var schema = {
      type: "object",
      properties: {
        adminEmail: {
          type: "string"
        },
        surveyName: {
          type: "string"
        }
      },
      required: ["surveyName", "adminEmail"],
      additionalProperties: false
    };
    var validate = ajv.compile(schema);
    var body = req.body;
    var valid = validate(body);

    if (!valid) {
      validate.errors.forEach(function (err) {
        return console.log(err.message);
      });
      throw new Error("Invalid data was transferd");
    } // users.users.find(find => find.email === body.email )


    users.users.map(function (user, index) {
      if (user.email === body.adminEmail) {
        users.users[index].createdSurvey.push(new Survey(body.surveyName, body.adminEmail));
        var selectedAdmin = users.users[index];
        var selectedAdminIndex = index;
        var adminCookie = JSON.stringify({
          selectedAdmin: selectedAdmin
        });
        var adminCookieIndex = JSON.stringify({
          selectedAdminIndex: selectedAdminIndex
        });
        res.cookie('admin', adminCookie, {
          maxAge: 300000000,
          httpOnly: true
        });
        res.cookie('adminIndex', adminCookieIndex, {
          maxAge: 300000000,
          httpOnly: true
        });
        res.send(selectedAdmin);
      }
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
}); // Route to post a question

app.post('/postQuestions', function (req, res) {
  try {
    var body = req.body;
    var admin = req.cookies.admin;
    var cookie = JSON.parse(admin);
    var selectedAdmin = cookie.selectedAdmin;
    var adminIndex = req.cookies.adminIndex;
    var cookieIndex = JSON.parse(adminIndex);
    var selectedAdminIndex = cookieIndex.selectedAdminIndex;
    var questions = body.questions;
    var surveyID = body.surveyID;
    questions.forEach(function (question) {
      selectedAdmin.createdSurvey.find(function (survey) {
        return survey.surveyID === surveyID;
      }).questions.push(new Question(question));
    });
    users.users[selectedAdminIndex] = selectedAdmin;
    var adminCookie = JSON.stringify({
      selectedAdmin: selectedAdmin
    });
    res.cookie('admin', adminCookie, {
      maxAge: 300000000,
      httpOnly: true
    });
    console.log(users.users);
    res.send(selectedAdmin);
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
}); // Route to send selected Admin

app.get('/selectedAdminUser', function (req, res) {
  var admin = req.cookies.admin;
  var cookie = JSON.parse(admin);
  var selectedAdmin = cookie.selectedAdmin;
  res.send(selectedAdmin);
}); // Route to create user

app.use('/createUser', usersRoute); // Login route

app.use('/login', loginRoute); // Route to add a survey

app.use('/addSurvey', surveysRoute); // Route to post a question

app.use('/postQuestions', questionsRoute); // Route to send selected Admin

app.use('/selectedAdminUser', adminRoute);
app.get('/sendSurvey', function (req, res) {
  try {
    var id = req.query.id;
    console.log(id);
    var idString = JSON.stringify(id);
    res.cookie('surveyEditID', idString, {
      maxAge: 300000000,
      httpOnly: true
    });
    res.send(id);
  } catch (e) {
    console.error(e);
  }
});
app.get('/getSurvey', function (req, res) {
  try {
    var surveyEditID = req.cookies.surveyEditID;
    var cookieEditID = JSON.parse(surveyEditID);
    var editID = cookieEditID;
    var admin = req.cookies.admin;
    var cookie = JSON.parse(admin);
    var selectedAdmin = cookie.selectedAdmin;
    console.log(selectedAdmin, editID);
    var surveyInfo = selectedAdmin.createdSurvey.filter(function (survey) {
      return survey.surveyID === editID;
    });
    res.send(surveyInfo);
  } catch (e) {
    console.error(e);
  }
});
app.get('/surveyToAnswer', function (req, res) {
  var admin = req.cookies.admin;
  var cookie = JSON.parse(admin);
  var selectedAdmin = cookie.selectedAdmin;
  var id = req.query.id;
  var surveyRequired = selectedAdmin.createdSurvey.filter(function (survey) {
    return survey.surveyID === id;
  });
  res.send(surveyRequired);
});
app.get('/guestVoter', function (req, res) {
  var guest = req.cookies.guest;
  console.log(guest);
  var guestCookie = JSON.parse(guest);
  console.log(guestCookie);
  var guestUser = guestCookie.guestUser;
  console.log(guestUser);
  res.send(guestUser);
});
app.post('/postVotes', function (req, res) {
  try {
    (function () {
      var schema = {
        type: "object",
        properties: {
          ID: {
            type: "string"
          },
          votes: {
            type: "array"
          },
          votersID: {
            type: "string"
          }
        },
        required: ["ID", "votes", "votersID"],
        additionalProperties: false
      };
      var validate = ajv.compile(schema);
      var body = req.body;
      var valid = validate(body);

      if (!valid) {
        validate.errors.forEach(function (err) {
          return console.log(err.message);
        });
        throw new Error("Invalid data was transferd");
      }

      console.log(body.ID, body.votes);
      var adminIndex = req.cookies.adminIndex;
      var cookieIndex = JSON.parse(adminIndex);
      var selectedAdminIndex = cookieIndex.selectedAdminIndex;
      var admin = req.cookies.admin;
      var cookie = JSON.parse(admin);
      var selectedAdmin = cookie.selectedAdmin;

      for (i = 0; i < body.votes.length; i++) {
        selectedAdmin.createdSurvey.find(function (survey) {
          return survey.surveyID === body.ID;
        }).questions[i].voters.score.push(body.votes[i]);
        selectedAdmin.createdSurvey.find(function (survey) {
          return survey.surveyID === body.ID;
        }).questions[i].voters.voterID.push(body.votersID);
      }

      users.users[selectedAdminIndex] = selectedAdmin;
      var adminCookie = JSON.stringify({
        selectedAdmin: selectedAdmin
      });
      res.cookie('admin', adminCookie, {
        maxAge: 300000000,
        httpOnly: true
      });
      res.send(selectedAdmin);
    })();
  } catch (e) {
    console.log(e);
    res.status(400).send({
      error: e.message
    });
  }
}); // Listen on port

app.listen(port, function () {
  console.log('Server listen on port', port);
});