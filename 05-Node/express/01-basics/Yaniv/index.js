const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

class StudentsList {
    array = [];
    addStudent(student) {
        this.array.push(student);
    }
}
const students = new StudentsList();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.post('/newStudent', (req, res) => {
    try {

        const { body } = req;

        const { name , id } = body;
        if (!name || !id) throw new Error('No name or id in data');

        students.addStudent(body);

        console.log(students.list);

        res.send(req.body);
    } catch (e) {
        console.error(e)
        res.status(400).send({ error: e.message });
    }

})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})