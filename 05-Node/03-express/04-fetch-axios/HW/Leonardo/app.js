/* create server-client app

in the server create an array of students (preferbly with a clouser)  

in the client, the user can add a student information ({name, age, id, avarage_grade})
the client send the added student information to the server. the server store the information on the array.

the user will enter the student id. in the client use 2 route requests. the user will get the information with on of two buttons.. one button will get the information with "params" and the second with "query".
the results will be showen on the DOM
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//Joi is to validate the data I enter:
const Joi = require('joi');
//Uuidv4 is to generate a new ID
const { uuid } = require('uuidv4');

app.use(express.json());
app.use(express.static('public'));

class Students {
    list = [];
    addStudent(student) {
        this.list.push(student)
    }
}
const students = new Students();

//This route is to create a new student
app.post('/addStudent', (req, res) => {
    try {
        const { body } = req;
        body.id = uuid();
        students.addStudent(body);
        res.send(students.list);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})

//This route is to show all the students
app.get('/getStudents', (req, res) => {
    res.send(students.list);
});


//This route will redirect the user to see the information of a student by params
app.get('/showStudentParam/:id', (req, res) => {
    let searchedStudent = students.list.find(student => student.id === req.params.id);
    res.send([searchedStudent]);
})

//This route will redirect the user to see the information of a student by querys
app.get('/showStudentQuery', (req, res) => {
    let searchedStudent = students.list.find(student => student.id === req.query.id);
    res.send([searchedStudent]);
})

app.listen(port, () => {
    console.log(`The server is running at port:${port}`)
});