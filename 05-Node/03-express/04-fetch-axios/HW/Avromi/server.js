const express = require('express');
const app = express();
const port = process.env.port || 3000;

//dataBase 

function outer() {
    const students = [];

    function inner(student) {
        students.push(student);
        students.forEach(student => {
            console.log(student)
        });

    }
    return inner
}

const addStudent = outer();

app.use(express.json());

app.use(express.static('public'))

app.put('/newStudent', (req, res) => {
    const student = req.body.newStudent
    addStudent(student)

    res.send({
        student,
        send: "OK"
    })
});

app.get('/', (req, res) => {
    const {studentId} = req.query.id
    res.send(
        // studentId
    )
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(
        id
    )
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})