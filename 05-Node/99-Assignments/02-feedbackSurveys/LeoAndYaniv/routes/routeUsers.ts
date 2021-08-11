export { };
const express = require('express');
const router = express.Router();

import {newUser, login, getInfo, uploadSurvey} from '../controlers/controlerUsers'

router.post('/create', newUser);
router.post('/login', login);
router.get('/info', getInfo);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', uploadSurvey);

module.exports = router