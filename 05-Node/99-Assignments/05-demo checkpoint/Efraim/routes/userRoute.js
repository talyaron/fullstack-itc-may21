const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const schemas = require('../schemas/schemas');

const {
    validateBody,
    createToken
} = require('../middleware/middleware');


router.post('/register',
    validateBody(schemas.registerSchemaAJV),
    createToken,
    userController.registerUser
)
router.get('/getAllUsers',
    userController.getAllUsers    
)

module.exports = router;