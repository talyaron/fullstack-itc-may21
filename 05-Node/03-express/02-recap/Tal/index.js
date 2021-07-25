//express
//post (with data), get (with data)

const students = [];

const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getStudents', (req, res) => {
    res.send({ students})
})

//get by name
app.get('/getStudent', (req, res)=>{
    console.log(req.query);
    let searchedStudents = students.filter(student=>student.name === req.query.name);
    res.send({ok:true, students:searchedStudents})
})

app.post('/addStudent', (req, res) => {
    const { body } = req;
    students.push(body);
    res.send({ ok: true, students });

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})