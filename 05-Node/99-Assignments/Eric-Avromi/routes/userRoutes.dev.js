"use strict";

var express = require('express');

var router = express.Router();

var _require = require('./models/userModels.js'),
    addUsers = _require.addUsers;

module.exports = router;