"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
//controllers
var userControllers_1 = require("../controllers/userControllers");
//middleware
var validationSchema_1 = require("../middleware/validationSchema");
var validationJSON_1 = require("../middleware/validationJSON");
var handleCookies_1 = require("../middleware/handleCookies");
//schema
var allSchemas_1 = require("../schemas/allSchemas");
router.post('/addNewUser', validationSchema_1.validateRegister(allSchemas_1.schemaRegister), validationJSON_1.isUserExist, userControllers_1.addNewUser)
    .post('/cookie', validationJSON_1.isUser, userControllers_1.sendCookie)
    .post('/addSection', handleCookies_1.readCookie, userControllers_1.addSection)
    .get('/readCookie', handleCookies_1.readCookie, userControllers_1.getEmail)
    .post('/addCartForNow/', handleCookies_1.readCookie, validationJSON_1.isThereSamProductOnCart, userControllers_1.addCartForNow)
    .put('/editCartNow/:idProduct', validationSchema_1.validateEditSchema(allSchemas_1.schemaEditNumber), validationJSON_1.isThereStock, handleCookies_1.readCookie, userControllers_1.editCartNow)["delete"]('/deleteProductOnCart/:id/:store', handleCookies_1.readCookie, userControllers_1.deleteProductOnCart)
    .post('/buyCart/:store', handleCookies_1.readCookie, userControllers_1.buyCart)
    .get('/seeCartStore/:store', handleCookies_1.readCookie, userControllers_1.seeCartStore);
module.exports = router;
