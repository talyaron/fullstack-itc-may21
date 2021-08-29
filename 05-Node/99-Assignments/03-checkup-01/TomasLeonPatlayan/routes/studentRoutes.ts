import { getStudent } from "../controlers/controllersStudent";

export{}
const express = require('express');
const router = express.Router();


router.get('/all_student',getStudent)


module.exports = router