const express = require('express');
app = express();
const port = process.env.PORT || 5000;
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


app.use(express.json());

app.use(express.static('public'));

const readallStudents = () => {
    const allStudents = fs.readFileSync('./students.json'); 
    return JSON.parse(allStudents); 
}

app.post('/aa', (req, res)=>{

    const {name, age, avgGrade} = req.body
    const newStudent = {
    
        name : name,
        age : age,
        avgGrade : avgGrade
    }
    const allStudents = readallStudents();
    allStudents.push(newStudent)
    fs.writeFileSync('./students.json', JSON.stringify(allStudents))
    res.send(allStudents)
})

app.get('/aa', (req, res) => {
    const allStudents = readallStudents()
    res.send(allStudents)
})

app.get(`aa/${id}`, (req, res) => {
    const student = {id: uuidv4()}
    res.send(students.id)
})

app.get(`aa?id=${id}`, (req, res) => {
    const student = {id: uuidv4()}
    res.send(students.id)
})





app.listen(port, ()=>{console.log(`Server listen on port ${port}`)})