const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



function outFunction() {
    const students = [];

    function inFunction(student) {
        students.push(student);
        students.forEach(student => {
            console.log(student)
        });

    }
    return inFunction
}

const addStudent = outFunction();

app.use(express.json());
app.use(express.static('public'));

app.put('/newStudent',(req,res) => {
    const student=req.body.student;
    addStudent(student);
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
    console.log(`The server is running at port:${port}`)
});