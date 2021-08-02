const express = require('express');
app = express();
const port = process.env.PORT || 5000;
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');



app.use(express.json());

app.use(express.static('public'));

const readAllStudents = () => {
    const allStudents = fs.readFileSync('./students.json'); 
    return JSON.parse(allStudents); 
}
const allStudents = readAllStudents()


app.post('/postStudents', (req, res)=>{

    const {name, age, avgGrade} = req.body
    const newStudent = {
    
        name : name,
        age : age,
        avgGrade : avgGrade,
        id : uuidv4()
    }
    allStudents.push(newStudent)
    fs.writeFileSync('./students.json', JSON.stringify(allStudents))
    res.send(allStudents)
})

app.get('/getAllStudents', (req, res) => {
    res.send(allStudents)
})

 app.get(`/getStudents`, (req, res) => {
    const id = req.query.id //YS: Why dont you destructure here like in the params? 
    const studentById = allStudents.find((element)=>element.id === id);
    res.send(studentById)
    req.send(studentById) //YS: Why are you sending twice? 
 })

app.get(`/getStudents/:id`, (req, res) => {
    const {id} = req.params;
    const studentByIdParams = allStudents.find((elements)=>elements.id === id);
    res.send(studentByIdParams)
    req.send(studentByIdParams) //YS: Why are you sending twice? 
    console.log(); //YS: ? 
})



app.listen(port, ()=>{console.log(`Server listen on port ${port}`)})