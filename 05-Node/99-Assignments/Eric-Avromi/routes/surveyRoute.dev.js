"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var router = express.Router();

var _require = require('uuid'),
    uuidv4 = _require.v4;

var fs = require('fs'); // const {addSurvey} = require('../models/surveyModel.js');


var _require2 = require('../controllers/surveyControllers'),
    getAllSurveys = _require2.getAllSurveys;

var _require3 = require('../middlewares/user'),
    getUser = _require3.getUser;

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
    newSurvey.id = uuidv4();
    console.log(admin); // addSurvey(newSurvey);

    res.send({
      ok: true,
      newSurvey: newSurvey
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.get('/allSurveys', getUser, getAllSurveys);
router.post('/pepe', function (req, res) {
  console.log(req.body);

  try {
    var admin = req.cookies.cookie.email;
    var allUsers = JSON.parse(fs.readFileSync("./users.json"));
    var findUser = allUsers.find(function (user) {
      return user.email === admin;
    });
    findUser.createdSurvey.push(req.body);
    fs.writeFileSync("./users.json", JSON.stringify(allUsers));
    newSurvey.title = req.body.title;
    newSurvey.questions = req.body.questions;
    newSurvey.admin = req.cookies.cookie.email;
    console.log(newSurvey);
    var allSurveys = fs.readFileSync("./survey.json");
    var allPars = JSON.parse(allSurveys);
    allPars.push(newSurvey);
    fs.writeFileSync("./survey.json", JSON.stringify(allPars));
    console.log(req.cookies);
    res.send({
      ok: true
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
module.exports = router;