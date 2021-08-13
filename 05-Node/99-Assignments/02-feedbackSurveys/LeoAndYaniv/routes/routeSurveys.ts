export { };
const express = require('express');
const router = express.Router();
import { userCookieRead } from '../middlewares/UserCookie';

import {addQuestion, newSurvey, getQuestionsSurvey, deleteQuestion, deleteSurvey, getSurveys} from '../controlers/controlerSurvey';

//When the user click to start a new survey I call this method
router.post('/createSurvey/:id', newSurvey);
router.post('/create/:uuid', addQuestion);
router.get('/getQuestions/:uuid', getQuestionsSurvey);
router.delete('/deleteQuestion/:id/:uuid', userCookieRead, deleteQuestion);
router.delete('/deleteSurvey/:uuid', deleteSurvey);
router.get('/getSurveys/:emailLogIn', getSurveys);


module.exports = router