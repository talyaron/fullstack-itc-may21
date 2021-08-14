export { };
const express = require('express');
const router = express.Router();
import { userCookieRead } from '../middlewares/UserCookie';

import {newSurvey, getQuestionsSurvey, addQuestion, editQuestion, deleteQuestion, deleteSurvey, getSurveys} from '../controlers/controlerSurvey';

//When the user click to start a new survey I call this method
router.post('/createSurvey/:admin', newSurvey);
router.post('/createQuestion/:uuid', addQuestion);
router.get('/getQuestions/:uuid', getQuestionsSurvey);
router.delete('/deleteQuestion/:qUuid/:uuid', userCookieRead, deleteQuestion);
router.put('/editQuestion/:qUuid/:uuid', userCookieRead, editQuestion);
router.delete('/deleteSurvey/:uuid', userCookieRead, deleteSurvey);
router.get('/getSurveys/:admin', userCookieRead, getSurveys);

module.exports = router