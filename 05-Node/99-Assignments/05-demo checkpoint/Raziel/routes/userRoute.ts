export { };
const express = require('express');
const router = express.Router();

import{checkUserExists} from '../middleweare/validUser'

import {registerUser,getUsers,logInUser} from '../controlers/userControlers';
router.post('/register',checkUserExists,registerUser);
router.post('/login',logInUser);
router.get('/userInfo',getUsers);

module.exports = router;