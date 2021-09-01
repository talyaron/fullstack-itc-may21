"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var itemsController_1 = require("../controllers/itemsController");
router
    .get('/all', isWorkingMW, itemsController_1.getItems)
    .post('/doSomething1', isWorkingMW, itemsController_1.doSomething1)
    .post('/', isWorkingMW, itemsController_1.addItem)
    .put('/', isWorkingMW, itemsController_1.updateItem)["delete"]('/:itemUuid', isWorkingMW, itemsController_1.removeItem);
function isWorkingMW(req, res, next) {
    console.log('working');
    next();
}
module.exports = router;
