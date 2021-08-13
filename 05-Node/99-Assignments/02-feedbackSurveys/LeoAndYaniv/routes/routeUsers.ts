export { };
const express = require('express');
const router = express.Router();
import { userCookieRead, userCookieWrite } from '../middlewares/UserCookie';

import { newUser, login, sendCookie, uploadSurvey } from '../controlers/controlerUsers'

router.post('/register', userCookieWrite ,newUser);
router.post('/login', login);
router.get('/info', userCookieRead, sendCookie);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', userCookieRead, uploadSurvey);
router.post('/answerLogin', userCookieWrite, sendCookie);

module.exports = router;