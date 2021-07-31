const express = require('express');
app = express();
const port = process.env.PORT || 5000;
const fs = require('fs')

app.use(express.json());

app.use(express.static('public'));

const readallStudents = () => {
    const allStudents = fs.readFileSync('./students.json'); 
    return JSON.parse(allStudents); 
}

app.post('/aa', (req, res)=>{

    const {id, name, age, avgGrade} = req.body

    const newStudent = {
        id : id,
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





app.listen(port, ()=>{console.log(`Server listen on port ${port}`)})