"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var router = express.Router();

var _require = require('uuid'),
    uuidv4 = _require.v4;

var fs = require('fs'); // const {addSurvey} = require('../models/surveyModel.js');


var _require2 = require('../models/surveyModel'),
    getAllSurveys = _require2.getAllSurveys;

var _require3 = require('../middlewares/user'),
    getUser = _require3.getUser;

var _require4 = require('./userRoutes'),
    get = _require4.get;

var Survey = function Survey() {
  _classCallCheck(this, Survey);

  this.title = '';
  this.questions = [];
  this.admin = "";
  this.id = "";
};

var newSurvey = new Survey();
router.post('/newSurvey', function (req, res) {
  try {
    var admin = req.cookies.cookie.email;
    newSurvey.id = uuidv4(); // addSurvey(newSurvey);

    res.send({
      ok: true,
      newSurvey: newSurvey
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.get('/getAllSurveys', function (req, res) {
  var surveys = getAllSurveys();
  res.send(surveys);
});
router["delete"]('/deleteSurvey/:id', function (req, res) {
  var id = req.params.id;
  var surveys = getAllSurveys();
  var newSurveys = surveys.filter(function (survey) {
    return survey.id !== id;
  });
  console.log(newSurveys);
  fs.writeFileSync('./survey.json', JSON.stringify(newSurveys));
  res.send(newSurveys);
});
router.post('/pepe', function (req, res) {
  try {
    var admin = req.cookies.cookie.email;
    var allUsers = JSON.parse(fs.readFileSync("./users.json"));
    var findUser = allUsers.find(function (user) {
      return user.email === admin;
    });

    if (findUser) {
      findUser.createdSurvey.push(req.body);
      fs.writeFileSync("./users.json", JSON.stringify(allUsers));
      newSurvey.title = req.body.title;
      newSurvey.questions = req.body.questions;
      newSurvey.admin = req.cookies.cookie.email;
      var allSurveys = fs.readFileSync("./survey.json");
      var allPars = JSON.parse(allSurveys);
      allPars.push(newSurvey);
      fs.writeFileSync("./survey.json", JSON.stringify(allPars));
      res.send({
        ok: true
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;