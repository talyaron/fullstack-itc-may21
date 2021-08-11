export { };
const express = require('express');
const router = express.Router();

import {addQuestion, newSurvey, getQuestionsSurvey, deleteQuestion} from '../controlers/controlerSurvey';

router.post('/createSurvey/:id', newSurvey);
router.post('/create/:uuid', addQuestion);
router.get('/getQuestions/:uuid', getQuestionsSurvey);
router.delete('/deleteQuestion/:id/:uuid', deleteQuestion);


module.exports = router