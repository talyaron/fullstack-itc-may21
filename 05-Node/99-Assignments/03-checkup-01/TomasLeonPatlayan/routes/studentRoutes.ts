import { addSurveys } from "../../../02-feedbackSurveys/Hoffer-Patlayan/controllers/surveyControllers";
import { getStudent } from "../controlers/controllersStudent";

export{}
const express = require('express');
const router = express.Router();


router.get('/all_student',getStudent).post('/add_student',addSurveys)


module.exports = router