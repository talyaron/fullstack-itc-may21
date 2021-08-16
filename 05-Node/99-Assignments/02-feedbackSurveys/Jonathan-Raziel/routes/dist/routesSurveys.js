"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllersSurvey_1 = require("../controllers/controllersSurvey");
/*YS: Ok, but what comes before? According to your server.ts:
    app.use('/register', userModel);
    app.use('/loginUser', userModel);
    app.use('/login', userModel);
    app.use('/cookie', userModel);
    app.use('/surveys', userModel);
    app.use('/score',userModel)
*/
router.post('/add', controllersSurvey_1.addSurveys);
router.get('/surveys', controllersSurvey_1.getUniqueId);
router.get('/questions', controllersSurvey_1.getUniqueIdQuestions);
router.get('/getSurvey/:id', controllersSurvey_1.getPreviousSurvey);
router["delete"]('/user/:id/:email', controllersSurvey_1.deleteSurveys);
module.exports = router;
