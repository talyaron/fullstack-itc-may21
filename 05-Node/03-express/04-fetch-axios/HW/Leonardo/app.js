/* create server-client app

in the server create an array of students (preferbly with a clouser)  

in the client, the user can add a student information ({name, age, id, avarage_grade})
the client send the added student information to the server. the server store the information on the array.

the user will enter the student id. in the client use 2 route requests. the user will get the information with on of two buttons.. one button will get the information with "params" and the second with "query".
the results will be showen on the DOM
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//Joi is to validate the data I enter:
const Joi = require('joi');
//Uuidv4 is to generate a new ID
const { uuid } = require('uuidv4');

app.use(express.json());
app.use(express.static('public'));

class Students {
    list = [];
    addStudent(student) {
        this.list.push(student)
    }
}
const students = new Students();

//This route is to create a new student
app.post('/addStudent', (req, res) => {
    try {
        const { body } = req;
        body.id = uuid();
        students.addStudent(body);
        res.send(students.list);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})

//This route is to show all the students
app.get('/getStudents', (req, res) => {
    try {
        res.send(students.list);
    } catch (error) {
        res.status(400).send({ error: e.message });
    }
});


//This route will redirect the user to see the information of a student by params
app.get('/showStudentParam/:id', (req, res) => {
    try {
        let searchedStudent = students.list.find(student => student.id === req.params.id);
        res.send([searchedStudent]);
    } catch (error) {
        res.status(400).send({ error: e.message });
    }
});

//This route will redirect the user to see the information of a student by querys
app.get('/showStudentQuery', (req, res) => {
    try {
        let searchedStudent = students.list.find(student => student.id === req.query.id);
        res.send([searchedStudent]);
    } catch (error) {
        res.status(400).send({ error: e.message });
    }
})

//This route is to delete a student
app.delete('/deleteStudent/:id', (req, res) => {
    try {
        let { id } = req.params
        students.list = students.list.filter(student => student.id !== id);
        res.send(students.list);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});


//This route is to sort the table (I tried not to DRY so I created a Switch, please Yona let me know if you have another idea on how to do it👏 )
//Create the next boolean to control the sort when user clicks:
let order = true;

app.get('/sortTable/:orderBy', (req, res) => {
    try {
        let { orderBy } = req.params
        switch (orderBy) {
            case 'firstname':
                if (order === true) {
                    const sort = students.list.sort((a, b) => a.firstname.localeCompare(b.firstname))
                    res.send(sort);
                    order = false;
                } else if (order === false) {
                    const sort = students.list.sort((a, b) => b.firstname.localeCompare(a.firstname))
                    res.send(sort);
                    order = true;
                }
                break;
            case 'lastname':
                if (order === true) {
                    const sort = students.list.sort((a, b) => a.lastname.localeCompare(b.lastname))
                    res.send(sort);
                    order = false;
                } else if (order === false) {
                    const sort = students.list.sort((a, b) => b.lastname.localeCompare(a.lastname))
                    res.send(sort);
                    order = true;
                }
                break;
            case 'age':
                if (order === true) {
                    const sort = students.list.sort((a, b) => a.age - b.age)
                    res.send(sort);
                    order = false;
                } else if (order === false) {
                    const sort = students.list.sort((a, b) => b.age - a.age)
                    res.send(sort);
                    order = true;
                }
                break;
            case 'average':
                if (order === true) {
                    const sort = students.list.sort((a, b) => a.averageGrade - b.averageGrade)
                    res.send(sort);
                    order = false;
                } else if (order === false) {
                    const sort = students.list.sort((a, b) => b.averageGrade - a.averageGrade)
                    res.send(sort);
                    order = true;
                }
                break;
        }
    } catch (error) {
        res.status(400).send({ error });
    }
})

//This function is to listen to the port
app.listen(port, () => {
    try {
        console.log(`The server is running at port:${port}`)
    } catch (error) {
        res.status(500).send({ error: 'There is an error in the port' });
    }
});

