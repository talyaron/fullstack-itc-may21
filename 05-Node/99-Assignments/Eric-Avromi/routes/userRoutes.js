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
        this.createdSurvey = [];  //this will get survey Id..
    }
}


router.post('/register', (req, res) => {

    //class info from the form, create a new user like an instance
    const {name, email, password} = req.body
    console.log(req.body);
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
    console.log(req.body);

    const newUser = new User ( email, password)
    console.log(newUser);
    // addUsers(newUser);
    
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