"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var router = express.Router();

var _require = require('uuid'),
    uuidv4 = _require.v4;

var Survey = function Survey(admin) {
  _classCallCheck(this, Survey);

  console.log('sdgdfgdfhdfh');
  this.title = '';
  this.id = uuidv4();
  this.questions = [];
  this.admin = admin;
};

router.post('/newSurvey', function (req, res) {
  try {
    console.log('insdie new survey route ');
    var admin = req.cookies.cookie.email;
    console.log(admin);
    var newSurvey = new Survey(admin);
    console.log(newSurvey);
    res.send({
      ok: true
    });
  } catch (error) {
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
// router.post('/newQuestion', (req, res) => { 
//     try {
//         const title = req.body.title;
//         const allQuestions = addQuestion(title)
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