const express = require('express');
app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static('public'));

let students = []

app.post('/addStudent', (req, res)=>{
    students.push(req.body)
    
    console.log(students)
})


app.get('/getStudent', (req, res)=>{
    res.send({students})

})

app.listen(port, ()=>{console.log(`Server listen on port ${port}`)})