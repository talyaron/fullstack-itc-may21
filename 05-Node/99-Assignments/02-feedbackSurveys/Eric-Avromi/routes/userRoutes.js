"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var userControllers_1 = require("../controllers/userControllers");
router.post('/user', userControllers_1.register);
router.post('/userLogin', userControllers_1.loginUser);
router.get('/getCookie', userControllers_1.getCookie);
router.get('/show/:email', userControllers_1.getSurveys);
module.exports = router;
const express = require('express')
const router = express.Router()

const {v4: uuidv4} = require('uuid'); 
const {addUsers} = require('../models/userModels.js')
// const {getAllUsers} = require(`../models/userModels.js`)



class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = uuidv4();
        this.createdSurvey = [];  
    }
}



router.post('/register', (req, res) => {

    const {name, email, password} = req.body
    const newUser = new User (name, email, password)
    addUsers(newUser);
    
    res.cookie('cookie', {name ,email},  { 
        maxAge: 30000000,
        httpOnly: true
    }).send({ 
        ok: true
    });
});

router.post('/login', (req, res) => {

    const {email, password} = req.body

    const newUser = new User ( email, password)
    addUsers(newUser);
    
    res.cookie('cookie', {email, password},  {
        maxAge: 30000000,
        httpOnly: true
    }).send({ 
        ok: true
    });
});


router.get('/userAdmin', (req, res) => { 
    const cookie = req.cookies['cookie'];
    res.send({cookie})

})


module.exports = router
