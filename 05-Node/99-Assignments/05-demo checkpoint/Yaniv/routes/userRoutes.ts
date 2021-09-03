export { };
const express = require('express');
const router = express.Router();

const { welcome, register, login, logout, details, allUsers } = require('../../controllers/dist/userControllers');
const { isLoggedInAndAuthenticated, validateBody, doesUserExist, encryptPassword, validatePassword } = require('../../middlewares/dist/userMiddlewares');
const { userSchema } = require('../../schemas/dist/userSchema')

router
    .get('/welcome', isLoggedInAndAuthenticated, doesUserExist, welcome)
    .post('/register', validateBody(userSchema), doesUserExist, encryptPassword, register)
    .post('/login', doesUserExist, validatePassword, login)
    .get('/logout', isLoggedInAndAuthenticated, doesUserExist, logout)
    .get('/details', isLoggedInAndAuthenticated, doesUserExist, details)
    .get('/all', isLoggedInAndAuthenticated, doesUserExist, allUsers);

module.exports = router;