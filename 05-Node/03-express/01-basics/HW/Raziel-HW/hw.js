const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const students=[];
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/getStudents',(req,res)=>{
    res.setDefaultEncoding({students})
})
app.post('/addStudent',(req,res)=>{
    
    const{body}=req;
    students.push(body);
    res.send({ok:true, students});
})

app.get('/findStudent',(req,res)=>{
    let findStudent=students.filter(student=>student.name==req.query.name);
    res.send({ok:true,students:findStudent})
})
app.get('/delStudent',(req,res)=>{
    const student2=students.filter(student=>student.name!==req.query.name);
    console.log(student2);
    res.send({ok:true, students:student2})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})