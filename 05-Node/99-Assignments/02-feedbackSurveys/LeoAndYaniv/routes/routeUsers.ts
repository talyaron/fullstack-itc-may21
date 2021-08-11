export { };
const express = require('express');
const router = express.Router();

import {newUser, login, getInfo} from '../controlers/controlerUsers'

router.post('/create', newUser);
router.post('/login', login);
router.get('/info', getInfo);

module.exports = router