const express = require('express');
const router = express.Router();

const  readAllTasks  = require ('../model/model');


router.get('/all', readAllTasks)

console.log(readAllTasks)