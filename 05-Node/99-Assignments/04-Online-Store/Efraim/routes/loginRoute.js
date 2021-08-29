const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const {
    createTokenAndRoleCheck,
    validateBody,
    decryptPwd
} = require('../middleware/middleware');

const Schemas = require('../schemas/allSchemas');

router.post(
    '/login',
    validateBody(Schemas.loginSchemaAJV),
    decryptPwd,
    createTokenAndRoleCheck,
    loginController.login
)



module.exports = router;