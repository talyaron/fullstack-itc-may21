const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

let students = [{ name: 'Dan', id: '458765384' }, { name: 'Tom', id: '5468568' }]

app.get('/getStudents', (req, res) => {
    res.send({ students })
})

app.post('/addStudent', (req, res) => {
    console.log(req.body);
    const { name, id } = req.body;
    students.push({ name, id })
    res.send({ message: 'one person was added', students })
})

app.post('/deleteStudent', (req, res) => {
    const { id } = req.body;

    students = students.filter(student => student.id !== id);
    res.send({ message: 'one student record was deleted', students })
})

app.put('/updateStudent', (req, res) => {

    const { id, name } = req.body;
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex > -1) {
        students[studentIndex].name = name;
        res.send({ message: 'one student was updated', students})
    } else {
        res.send({ message: 'couldnt find the student', students})
    }

})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

