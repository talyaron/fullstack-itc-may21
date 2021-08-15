export { };
const express = require('express');
const router = express.Router();
import { userCookieRead } from '../middlewares/UserCookie';

import {newSurvey, getSurveys, deleteSurvey, addQuestion, editQuestion, deleteQuestion, getQuestionsSurvey, updateQuestionsSurvey } from '../controlers/controlerSurvey';

//When the user click to start a new survey I call this method
router.route('/survey/:uuid')
    .post(userCookieRead, newSurvey) // for admins
    .get(userCookieRead, getSurveys) // for admins
    .delete(userCookieRead, deleteSurvey); // for admins

router.route('/question/:uuid/:qUuid')
    .post(addQuestion) // for admins
    .put(userCookieRead, editQuestion) // for admins
    .delete(userCookieRead, deleteQuestion); // for admins

router.route('/questions/:uuid')
    .get(getQuestionsSurvey)
    .put(updateQuestionsSurvey);

module.exports = router;