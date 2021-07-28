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
<<<<<<< HEAD
    const readData = read()
    res.send(readData)
=======

    res.send(students) //YS: Where is this variable coming from? 
>>>>>>> c347afc173738aaea66ac149f3dfd0a28bec4354
})

app.get('/getStudents', (req, res) => {
    res.send({students}) //YS: Where is this variable coming from? 
})

//get by name
<<<<<<< HEAD
app.get('/getStudent', (req, res) => {
    const readData = read()
  
    let searchedStudents = readData.filter(student => student.name === req.query.name);
    
        res.send({
            ok: true,
            students: searchedStudents
        })
  
})

app.post('/addStudent', (req, res) => {
=======
app.get('/getStudent', (req, res) => { 
    console.log(req.query); //YS: You should be doing this by id and setting the route to:  /getStudent/:id
    let searchedStudents = students.filter(student => student.name === req.query.name); //YS: Use find instead of filter. 
    res.send({
        ok: true,
        students: searchedStudents
    })
})

app.post('/getStudent', (req, res) => { //YS: This route should be /addStudent
>>>>>>> c347afc173738aaea66ac149f3dfd0a28bec4354
    const readData = read()

    const {
        name
    } = req.body
    const student = {
        name,
        id: uuidv4()
    }
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

app.put('/editStudent', (req, res) => { //YS: This route should be /editStudent/:id  (I know that we did this together, but its better if you start using it this way)
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

<<<<<<< HEAD
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
=======
// YS: Why wasnt this implemented? 

// app.delete('/delStudent', (req, res)=>{
//     console.log(req.query);
//     let searchedStudents = students.filter(student=>student.name !== req.query.name);
//     res.send({ok:true, students:searchedStudents})
// })
>>>>>>> c347afc173738aaea66ac149f3dfd0a28bec4354

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})