export { };
const express = require('express');
const router = express.Router();
import { userCookieRead } from '../middlewares/UserCookie';

import {newSurvey, getQuestionsSurvey, updateQuestionsSurvey, addQuestion, editQuestion, deleteQuestion, deleteSurvey, getSurveys} from '../controlers/controlerSurvey';

//When the user click to start a new survey I call this method
router.post('/createSurvey/:admin', newSurvey);
router.get('/getSurveys/:admin', userCookieRead, getSurveys);
router.delete('/deleteSurvey/:uuid', userCookieRead, deleteSurvey);

router.post('/createQuestion/:uuid', addQuestion);
router.put('/editQuestion/:qUuid/:uuid', userCookieRead, editQuestion);
router.delete('/deleteQuestion/:qUuid/:uuid', userCookieRead, deleteQuestion);

router.get('/getQuestions/:uuid', getQuestionsSurvey);
router.put('/updateQuestions/:uuid', updateQuestionsSurvey);

module.exports = router