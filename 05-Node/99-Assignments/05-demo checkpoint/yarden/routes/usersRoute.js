var express = require('express');
var router = express.Router();
var _a = require('../controllers/usersController'), get_users = _a.get_users, add_user = _a.add_user;
// const { userSchemaAJV } = require('../schemas/userSchema')
// const { validateBodyUser } = require('../middleware/validateBodyUser')
router
    .get('/allUsers', get_users)
    .post('/addUser', add_user);
module.exports = router;
