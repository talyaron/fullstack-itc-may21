const express = require('express');
const app = express();
const port = process.env.port || 3000;

//dataBase 
// const students = [];
function outer() {
    const students = [];

    function inner(student) {
        if (student === "l") {

            return students
        }

        students.push(student);
        // students.forEach(student => {
        //     console.log(student)
        // });
        return students

    }
    return inner
}

const students = outer();

app.use(express.json());

app.use(express.static('public'))

app.put('/newStudent', (req, res) => {
    const student = req.body.newStudent
    students(student)
    // students.push(student)

    res.send({
        student,
        send: "OK"
    })
});

app.get('/', (req, res) => {
    const {
        studentId
    } = req.query.id
    const searchedStudent = students("l").filter(student => student.id === studentId)
    res.send({
        searchedStudent
    })
})

app.get('/:id', (req, res) => {
    try {
        
    const id = req.params.id
    const searchedStudent = students("l").filter(student => student.id === id)
    
    const result = (searchedStudent.length === 0)?'Student not Found':searchedStudent

    res.send({
        result
    })
} catch (error) {
    console.log(error.message);
    res.status(400).send({ error: error.message });
}
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})