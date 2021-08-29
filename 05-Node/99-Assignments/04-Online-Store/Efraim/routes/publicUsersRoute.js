const express = require('express');
const router = express.Router();
const publicUsersController = require('../controllers/publicUsersController');
const {
    checkPassword,
    checkEmailValid,
    validateBody,
    encryptPwd,
    checkAdminAccountCreated
} = require('../middleware/middleware');

const Schemas = require('../schemas/allSchemas');

router.get(
    '/getAllUsers',
    publicUsersController.getAllUsers
)

router.post(
    '/addUser',
    validateBody(Schemas.registerSchemaAJV),
    checkEmailValid,
    checkPassword,
    encryptPwd,
    checkAdminAccountCreated,
    publicUsersController.addUser
)


router.get(
    '/getAllProducts',
    publicUsersController.getAllProducts
)

router.get(
    '/productID',
    publicUsersController.productID
)


module.exports = router;