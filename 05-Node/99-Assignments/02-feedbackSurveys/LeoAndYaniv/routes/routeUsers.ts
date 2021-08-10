export { };
const express = require('express');
const router = express.Router();

import {newUser, login} from '../controlers/controlerUsers'

router.post('/create', newUser);
router.post('/login', login);

module.exports = router