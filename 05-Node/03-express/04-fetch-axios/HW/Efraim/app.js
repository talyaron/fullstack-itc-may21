const express = require('express');
app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const Ajv = require("ajv");
const ajv = new Ajv()


app.use(express.static('public'));


class Student {

    constructor(name, age, studentID, averageGrade) {
        this.name = name;
        this.age = age;
        this.studentID = studentID
        this.averageGrade = averageGrade
    }
}

class Students {

    constructor() {
        this.students = [];
    }


    addStudent(students) {
        try {
            this.students.push(students);

        } catch (e) {
            console.error(e)
        }
    }
    findStudentWithID(stID) {
        try {
            const searchedStudents = this.students.filter(student => student.studentID === parseInt(stID));


            html =
                `<div class="holder__student" id="${searchedStudents[0].studentID}">
                <div class="holder__student__id">Student ID: ${searchedStudents[0].studentID}</div>
                <div class="holder__student__name">Student Name: ${searchedStudents[0].name}</div>
                <div class="holder__student__age"> Student Age: ${searchedStudents[0].age}</div>
                <div class="holder__student__averageGrade"> Average Grade: ${searchedStudents[0].averageGrade}%</div>
                </div>`;

            return html;

        } catch (e) {
            console.error(e)
        }
    }


}
const students = new Students();
let html = ''

app.put('/addStudent', (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                name: {
                    type: "string"
                },
                age: {
                    type: "integer"
                },
                studentID: {
                    type: "integer"
                },
                averageGrade: {
                    type: "integer"
                }
            },
            required: ["name", "age", "studentID", "averageGrade"],
            additionalProperties: false
        }
        const validate = ajv.compile(schema)


        const {
            body
        } = req;

        const valid = validate(body)
        if (!valid) {
            validate.errors.forEach(err =>
                console.log(err.message)
            )
            throw new Error("Invalid data was transferd")
        }
        
        students.addStudent(new Student(body.name, body.age, body.studentID, body.averageGrade));
        res.send(students);
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }

})

app.get('/getStudentQuery', (req, res) => {
    try {
        const searchedID = req.query.id;
        const student = students.findStudentWithID(searchedID)
        res.send(student)
    } catch (e) {
        console.error(e)
    }
})

app.get('/getStudentParam/:ID', (req, res) => {
    try {
        const searchedID = req.params.ID;
        const student = students.findStudentWithID(searchedID)
        res.send(student)

    } catch (e) {
        console.error(e)
    }
})

app.get('/getStud', (req, res) => {
    try {
        res.send({
            html
        })
    } catch (e) {
        console.error(e)
    }
})



app.listen(port, () => {
    console.log('Server listen on port', port)
})