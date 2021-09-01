const express = require('express');
const router = express.Router();
const { get_users, add_user } = require('../controllers/usersController')
// const { userSchemaAJV } = require('../schemas/userSchema')
// const { validateBodyUser } = require('../middleware/validateBodyUser')

router
    .get('/allUsers', get_users)
    .post('/addUser', add_user)

module.exports = router