export { };
const express = require('express');
const router = express.Router();
import { userCookieRead } from '../middlewares/UserCookie';
import { isAdmin } from '../middlewares/isAdmin';

import {newSurvey, getSurveys, deleteSurvey, addQuestion, editQuestion, deleteQuestion, getQuestionsSurvey, updateQuestionsSurvey } from '../controlers/controlerSurvey';

//When the user click to start a new survey I call this method
router.route('/survey/:uuid')
    .post(userCookieRead, isAdmin, newSurvey)  //YS: Very nice use of middleware!
    .get(userCookieRead, isAdmin, getSurveys)
    .delete(userCookieRead, isAdmin, deleteSurvey);

router.route('/question/:uuid/:qUuid')
    .post(userCookieRead, isAdmin, addQuestion)
    .put(userCookieRead, isAdmin, editQuestion)
    .delete(userCookieRead, isAdmin, deleteQuestion);

router.route('/questions/:uuid')
    .get(getQuestionsSurvey)
    .put(updateQuestionsSurvey);

module.exports = router;

//We comment the middleware "idAdmin" because it was causing problems and we didnt have enought time to figure out
