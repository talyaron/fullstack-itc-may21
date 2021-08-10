export { };
const express = require('express');
const router = express.Router();

import {addQuestion, newSurvey} from '../controlers/controlerSurvey';

router.post('/createSurvey/:id', newSurvey);
router.post('/create/:uuid', addQuestion);

module.exports = router