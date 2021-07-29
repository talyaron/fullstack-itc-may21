const express = require('express');
const app = express();
const port = process.env.port || 3000;

//dataBase 

function outer(){
    const studnets = [];
    function inner(student){
        students.push(student)
        console.log(student)
    }
    return inner
}

const addStudent= outer();

app.use(express.json());

app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
