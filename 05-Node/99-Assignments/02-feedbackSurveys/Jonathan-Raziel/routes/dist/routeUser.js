"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllersUsers_1 = require("../controllers/controllersUsers");
/*YS: Ok, but what comes before? According to your server.ts:
    app.use('/surveys',surveyModel)
    app.use('/id',surveyModel)
    app.use('/id',surveyModel)
    app.use('/previous',surveyModel)
    // app.use('/c', surveyModel)
    app.use('/delete',surveyModel)
*/
router.post('/user', controllersUsers_1.usersRegister);
router.post('/userLogin', controllersUsers_1.loginUser);
router.post('/endUserLogin', controllersUsers_1.endUserLogin);
router.get('/getCookie', controllersUsers_1.getCookie);
router.get('/show/:email', controllersUsers_1.getSurveys);
router.post('/add/:id', controllersUsers_1.scoreAdd);
module.exports = router;
