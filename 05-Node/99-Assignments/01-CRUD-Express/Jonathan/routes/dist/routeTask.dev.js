"use strict";

var express = require('express');

var router = express.Router();

var readAllTasks = require('../model/model');

router.get('/all', readAllTasks);
console.log(readAllTasks);