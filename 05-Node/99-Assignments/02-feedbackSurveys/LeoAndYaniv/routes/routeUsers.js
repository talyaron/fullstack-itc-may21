const express = require('express')
const router = express.Router();

const controllers = require('../controlers/controlerUsers');

router.post('/user', controllers.newUser)

module.exports = router;