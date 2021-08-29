export { };
const express = require('express')
const router = express.Router();

const {getStudents, addStudent,getRandomStudents} = require('../controlers/controlerStudents');

router
    .get('/all_students',getStudents)
    .post('/random_students',isW, getRandomStudents)
    .post('/add_student',addStudent)
    


    function isW(req, res, next){
        console.log('working');
        next()
    }
module.exports = router