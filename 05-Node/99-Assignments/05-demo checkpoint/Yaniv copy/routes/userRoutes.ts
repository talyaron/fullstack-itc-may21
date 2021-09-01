export { };
const express = require('express');
const router = express.Router();

const { welcome, register, login, logout, details, allUsers } = require('../../controllers/dist/userControllers');
const { isLoggedInAndAuthenticated, doesUserExist, encryptPassword, validatePassword } = require('../../middlewares/dist/userMiddlewares');

router
    .get('/welcome', isLoggedInAndAuthenticated, doesUserExist, welcome)
    .post('/register', doesUserExist, validatePassword, encryptPassword, register)
    .post('/login', doesUserExist, validatePassword, login)
    .get('/logout', isLoggedInAndAuthenticated, doesUserExist, logout)
    .get('/details', isLoggedInAndAuthenticated, doesUserExist, details)
    .get('/all', isLoggedInAndAuthenticated, doesUserExist, allUsers);

module.exports = router;