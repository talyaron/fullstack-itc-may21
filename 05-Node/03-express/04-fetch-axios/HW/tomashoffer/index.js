const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


let students = [];


// READ JSON
app.use(express.json());
// READ PUBLIC 
app.use(express.static('public'));
// GET STUDENTS
app.get('/getAllStudent', (req, res)=>{
    res.send(students)
})
// POST STUDIENT WITH QUERY
app.post('/postStudents', (req, res)=>{
    const student = req.body; //YS: You should be making a new object here and adding the ID here (not from the FE). 
    students.push(student);
    res.send(student);
})
// GET SEARCHED STUDIENT WITH PARAMS ID
app.get('/searchParam/:id', (req, res)=>{  
    const {id} = req.params;
    let searchedStudent = students.find((stud)=>stud.id === id);
    res.send(searchedStudent)
})

app.get('/searchQuery', (req, res)=>{  
    const {id} = req.query;
    const searchedStudent = students.filter((stud)=>stud.id === id);
    res.send(searchedStudent)
})

app.listen(port, ()=>{console.log('Server listen on port', port)})



// create server-client app

// in the server create an array of students (preferbly with a clouser)

// in the client, the user can add a student information ({name, age, id, aconstage_grade})
// the client send the added student information to the server. the server store the information on the array.

// the user will enter the student id. in the client use 2 route requests. the user will get the information with on of two buttons.. one button will get the information with "params" and the second with "query".
// the results will be showen on the DOM

// FORMULARIO => NAME, AGE, ID, AVERAGE_GRADE
// AXIOS => GET, POST
// RUTAS: INDEX, GETSTUDENTS (PARAMS), POSTSTUDENTS (QUERY)
// EVENTLISTENERS FUNCTIONS IN BOTTOMS TO SHOW IN THE DOM
