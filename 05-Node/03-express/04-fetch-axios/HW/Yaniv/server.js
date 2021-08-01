const express = require('express');
const { v4: uuidv4 } = require('uuid');

app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// closure for students
function outerStudents() {
    try {
        let students = [];

        function innerStudents(student) {
            try {
                if (student === "get") return students;
                students.unshift(student);
                return students;

            } catch (error) {
                console.error(error);
            }
        }
        return innerStudents;

    } catch (error) {
        console.error(error);
    }
}

const Students = /** @class */ (function () {
    function Students() {
        try {
            this.studentsArray = outerStudents();
        } catch (error) {
            console.error(error);
        }
    }

    Students.prototype.addStudent = function (student) {
        try {
            this.studentsArray({ ...student, uuid: uuidv4() });
        } catch (error) {
            console.error(error);
        }
    }

    Students.prototype.searchStudent = function (studentUuid) {
        let searchedStudent = this.studentsArray('get');
        searchedStudent = searchedStudent.filter(student => student.uuid === studentUuid);

        const result = (searchedStudent.length === 0) ? `No student found with uuid ${studentUuid}` : searchedStudent;

        return result;
    }

    return Students;
}());

const students = new Students;

app.post('/add-student', (req, res) => {
    try {
        const { body } = req;
        students.addStudent(body);
        res.send(`${body.name} added to students list`);

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }
});

app.get('/student/:uuid', (req, res)=> {
    try {
        const { uuid } = req.params;
        res.send(students.searchStudent(uuid));

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }
});

app.get('/student', (req, res)=> {
    try {
        const { uuid } = req.query;
        res.send(students.searchStudent(uuid));

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }
});

app.get('/all-students', (req, res) => {
    res.send(students.studentsArray('get'));
});

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});