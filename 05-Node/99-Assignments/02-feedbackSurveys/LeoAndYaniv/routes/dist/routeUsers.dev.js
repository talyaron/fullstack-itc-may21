"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controlerUsers = require("../controlers/controlerUsers");

var express = require('express');

var router = express.Router();
router.get('/all', _controlerUsers.allUsers);
module.exports = router;