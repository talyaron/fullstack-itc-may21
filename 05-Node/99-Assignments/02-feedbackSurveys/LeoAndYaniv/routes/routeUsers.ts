export { };
const express = require('express');
const router = express.Router();
import { userCookieRead, userCookieWrite } from '../middlewares/UserCookie';

import { newUser, login, sendCookie, uploadSurvey, answerLogin } from '../controlers/controlerUsers'

router.post('/register', userCookieWrite ,newUser);
router.post('/login', login);
router.get('/info', userCookieRead, sendCookie);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', userCookieRead, uploadSurvey);
router.post('/answerLoginBefore', userCookieWrite, sendCookie);
router.post('/answerLoginAfter', userCookieRead, answerLogin);

module.exports = router;