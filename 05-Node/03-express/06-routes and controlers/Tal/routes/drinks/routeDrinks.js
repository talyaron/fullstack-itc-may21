"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var images_1 = require("../../model/images");
router.get('/all', function (req, res) {
    res.send(images_1.drinks);
});
module.exports = router;
