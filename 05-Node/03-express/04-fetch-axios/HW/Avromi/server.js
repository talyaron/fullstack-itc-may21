const express = require('express');
const app = express();
const port = process.env.port || 3000;

//dataBase 
const students = [];
// function outer() {
//     const students = [];

//     function inner(student) {
//         if(student === "l"){
//             const allStudents = students.map(stu)
//             return allStudents
//         }
//         if(student !== "l"){
//         students.push(student);
//         // students.forEach(student => {
//         //     console.log(student)
//         // });
//         }

//     }
//     return inner
// }

// const addStudent = outer();

app.use(express.json());

app.use(express.static('public'))

app.put('/newStudent', (req, res) => {
    const student = req.body.newStudent
    // addStudent(student)
    students.push(student)

    res.send({
        student,
        send: "OK"
    })
});

app.get('/', (req, res) => {
    const {
        studentId
    } = req.query.id
    const searchedStudent = students.filter(student => student.id === studentId)
    res.send(
        {searchedStudent}
    )
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    const searchedStudent = students.filter(student => student.id === id)

    res.send(
    {searchedStudent}
    )
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})