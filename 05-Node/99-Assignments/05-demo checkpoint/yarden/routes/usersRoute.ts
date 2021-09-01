const express = require('express');
const router = express.Router();
import { get_users, add_user } from '../controllers/usersController';
import { userSchemaAJV } from '../schemas/userSchema';
import { validateBodyUser } from '../middleware/validateBodyUser';

// const { sendCookie } = require('../middleware/cookie');


router
    .get('/allUsers', get_users)
    .post('/addUser', validateBodyUser(userSchemaAJV), add_user)

module.exports = router