const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');
uuidv4();

class Student{
    studentList=[];

    addStudent(student){
        this.studentList.push(student);
    }
    searchStudent(queryOrParam) {
        let searchedStudent = students.studentList.find(student => student.id === queryOrParam);
        return searchedStudent;
    };

}
const students = new Student();

app.post('/addStudent',(req,res)=>{
    const {body} = req.body;

    const student ={
        name:value.name,
        age:value.age,
        grade:value.grade,
        id: uuidv4()

    }
    students.addStudent(student);
    res.send(students.studentList);

})

app.get('/getStudents', (req, res) => {
    try {
        res.send(students.studentList);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/getStudents', (req, res) => {
    try {
        res.send(students.studentList);
    } catch (error) {
        res.status(400).send(error);
    }
});



app.get('/showStudentParam/:id', (req, res) => {
    try {
        const foundStudent= students.searchStudent(req.params.id);
        res.send([foundStudent]);
    } catch (error) {
        res.status(400).send(error);
    }
});



app.get('showStudentQuery', (req, res) => {
    try {
        const foundStudent= students.searchStudent(req.query.id);
        res.send([foundStudent]);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`The server is running at port:${port}`)
});