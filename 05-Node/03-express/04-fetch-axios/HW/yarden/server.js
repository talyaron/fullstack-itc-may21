/* Server-client app for array of students */

// Dependencies: express, uuid, joi
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const Joi = require('joi')
const cors = require('cors')
// Use express and port 3000:
const app = express()
const port = process.env.PORT || 3000
// Setup express:
app.use(express.json())
app.use(express.static('public'))
app.use(cors)
// Create a class of students-array with add method:
class StudentsArray {
    list = []
    add(student) {
        this.list.push(student)
    }
}
const myStudents = new StudentsArray() //Instance creation


// (Create) Add student:
app.post('/addStudent', (req, res) => {
    try {
        const { body } = req
        body.id = uuidv4() //YS: Very nice 
        myStudents.add(body)
        res.send(myStudents)
    } catch (er) {
        res.status(400).send({ error: er.message })
    }
    console.log(req.body);
})

// (Read) Show student list:
app.get('/getStudents', (req, res) => {
    res.send(myStudents);
})

// View student with params:
app.get('/viewStudentWithParams', (req, res) => { //YS: Should be: `/viewStudentWithParams/:id`
    const chosenStudent = myStudents.list.find(s => student.id === req.params.id)
    res.send([chosenStudent])
}) 

// View student with query:
app.get('/viewStudentWithQuery', (req, res) => {
    const chosenStudent = myStudents.list.find(s => student.id === req.query.id)
    res.send([chosenStudent])
}) 


//Listen on port:
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})