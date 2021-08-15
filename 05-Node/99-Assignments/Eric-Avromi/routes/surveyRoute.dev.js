"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var router = express.Router();

var _require = require('uuid'),
    uuidv4 = _require.v4;

var fs = require('fs');

var _require2 = require('../models/surveyModel.js'),
    addSurvey = _require2.addSurvey;

var _require3 = require('../controllers/surveyControllers'),
    getAllSurveys = _require3.getAllSurveys;

var _require4 = require("../models/userModels.js"),
    getAllUsers = _require4.getAllUsers;

var _require5 = require('../middlewares/user'),
    getUser = _require5.getUser;

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
}); // router.get('/', (req, res) => {
//     try {
//         const allSurveys = getAllSurveys()
//         res.send(
//             allSurveys
//         )
//     } catch (error) {
//         res.status(500).send(error.message) 
//     }
// })
// router.delete('/deleteSurvey', (req, res) => { 
//     try {
//         console.log("before id");
//         const id = req.query.id;
//         const allSurveys = deleteSurvey(id)
//         res.send(
//             allSurveys
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })
// router.delete('/deleteQuestion', (req, res) => { 
//     try {
//         console.log("before id");
//         const id = req.query.id;
//         const allQuestions = deleteQuestion(id)
//         res.send(
//             allQuestions
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })
// router.put('/editSurvey', (req, res) => {
//     try {
//         const newTitle = req.body.newTitle;
//         const id = req.body.id; 
//         console.log(id);
//         const allSurveys =  editSurvey(id, newTitle)
//         console.log("afetr edit task ");
//         res.send(
//             allSurveys
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })
// router.put('/editQuestion', (req, res) => {
//     try {
//         const newTitle = req.body.newTitle;
//         const id = req.body.id; 
//         console.log(id);
//         const allQuestions =  editQuestion(id, newTitle)
//         console.log("afetr edit task ");
//         res.send(
//             allQuestions
//         )
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// })

module.exports = router;