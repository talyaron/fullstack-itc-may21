const {
    randomUUID
} = require('crypto')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const {
    v4: uuidv4
} = require('uuid');


function read() {
    const file = fs.readFileSync('./students.json')
    return JSON.parse(file);
}

app.use(express.json());

app.get('/', (req, res) => {
    const readData = read()
    res.send(readData)
})

app.get('/getStudents', (req, res) => {
    res.send({
        students
    })
})

//get by name
app.get('/getStudent', (req, res) => {
    const readData = read()
  
    let searchedStudents = readData.filter(student => student.name === req.query.name);
    
        res.send({
            ok: true,
            students: searchedStudents
        })
  
})

app.post('/addStudent', (req, res) => {
    const readData = read()

    const {name} = req.body
    const student = {name, id: uuidv4()}
    readData.push(student);
    try {

        fs.writeFileSync('./students.json', JSON.stringify(readData))

        res.status(200).send({
            ok: true,
            readData
        });
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.put('/editStudent', (req, res) => {
    const readData = read()
 
    const {
        id,
        newName
    } = req.body
    const studentToEdit = readData.find(student => student.id === id)
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

app.delete('/delStudent', (req, res) => {
    const readData = read()
  
    const studentId = req.query.id;
    const newStudentData = readData.filter(student => student.id !== studentId)

    try {

        fs.writeFileSync('./students.json', JSON.stringify(newStudentData))

        res.status(200).send(
            newStudentData, 'student has been deleted'
        );
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})