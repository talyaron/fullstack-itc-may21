const { randomUUID } = require('crypto')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');



function read() {
    const file = fs.readFileSync('./students.json')
    return JSON.parse(file);
}

app.use(express.json());

app.get('/', (req, res) => {

    res.send(students)
})

app.get('/getStudents', (req, res) => {
    res.send({
        students
    })
})

//get by name
app.get('/getStudent', (req, res) => {
    console.log(req.query);
    let searchedStudents = students.filter(student => student.name === req.query.name);
    res.send({
        ok: true,
        students: searchedStudents
    })
})

app.post('/getStudent', (req, res) => {
    const readData = read()
    console.log(readData);
    const {name} = req.body
    const student = {name, id:uuidv4()}
    readData.push(student);
    try {

        fs.writeFileSync('./students.json', JSON.stringify(readData))

        res.status(200).send({
            ok: true, readData
        });
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.put('/editStudent', (req, res) => {
    const readData = read()
    console.log(readData);
    const {id, newName} = req.body
    const studentToEdit = readData.find(student=>student.id === id)
    studentToEdit.name = newName
    try {

        fs.writeFileSync('./students.json', JSON.stringify(readData))

        res.status(200).send(
           studentToEdit
        );
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// app.delete('/delStudent', (req, res)=>{
//     console.log(req.query);
//     let searchedStudents = students.filter(student=>student.name !== req.query.name);
//     res.send({ok:true, students:searchedStudents})
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})