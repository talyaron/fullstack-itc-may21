export { };
const express = require('express');
const router = express.Router();

//I import the function of the Middlewares that I going to use here
import { userCookieRead, userCookieWrite } from '../middlewares/UserCookie';
import { isAdmin } from '../middlewares/isAdmin';

//I import the function of the Controlers that Im going to use here
import { newUser, login, sendCookie, uploadSurvey, answerLogin } from '../controlers/controlerUsers'

router.post('/register', userCookieWrite ,newUser);
router.post('/login', login);
router.get('/info', userCookieRead, sendCookie);
//When the user click to finish the new survey I call this method
router.post('/uploadUserWithSurvey/:uuid', userCookieRead, isAdmin, uploadSurvey);
router.post('/answerLoginBefore', userCookieWrite, sendCookie);
router.post('/answerLoginAfter/:uuid', userCookieRead, answerLogin);

module.exports = router;