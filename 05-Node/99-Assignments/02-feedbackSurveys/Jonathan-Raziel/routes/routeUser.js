"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var controllersUsers_1 = require("../controllers/controllersUsers");
// import {loginUser} from '../controllers/controllersUsers'
// import {getCookie} from '../controllers/controllersUsers'
// import {getSurveys} from '../controllers/controllersUsers'
router.post('/usersRegister', controllersUsers_1.usersRegister);
router.post('/userLogin', controllersUsers_1.loginUser);
router.get('/getCookie', controllersUsers_1.getCookie);
router.get('/show/:email', controllersUsers_1.getSurveys);
module.exports = router;
