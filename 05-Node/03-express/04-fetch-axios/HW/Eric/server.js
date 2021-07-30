const express = require('express');
app = express();
const port = process.env.PORT || 5000;
const fs = require('fs')

app.use(express.json());

app.use(express.static('public'));

const readAllUsers = () => {
    const allUsers = fs.readFileSync('./students.json');  //async     
    return JSON.parse(allUsers); //original form
}

app.post('/aa', (req, res)=>{

    const {id, name, age, avgGrade} = req.body

    const newStudent = {
        id : id,
        name : name,
        age : age,
        avgGrade : avgGrade
    }

    const allUsers = readAllUsers();
    allUsers.push(newStudent)
    fs.writeFileSync('./students.json', JSON.stringify(allUsers))
    res.send(allUsers)
})


app.get('/aa', (req, res) => {
    const allUsers = readAllUsers()
    res.send(allUsers)
})





app.listen(port, ()=>{console.log(`Server listen on port ${port}`)})