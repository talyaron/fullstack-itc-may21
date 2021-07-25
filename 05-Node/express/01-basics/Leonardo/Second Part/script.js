/* create an HTML file whic have a form.
The form takes student name and student id
on submit, the page sends the student details to the server.the server recives the data, and return the full list of students.
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Ajv = require("ajv");
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const fs = require('fs');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}))

class Students {
    list = [];
    addStudent(student) {
        this.list.push(student)
    }
}
const students = new Students();

app.get('/style.css', (req, res) => {
    const css = fs.readFileSync('style.css');
    res.send(css);
})
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to the app to add students!')
})

app.post('/submitStudent', (req, res) => {
    try {

        const schema = {
            type: "object",
            properties: {
                name: { type: "string" },
                id: { type: "integer" }
            },
            required: ["name", "id"],
            additionalProperties: false
        }
        const validate = ajv.compile(schema)

        const { name,id } = shema.properties;

        const valid = validate(body)
        if (!valid) {
            validate.errors.forEach(err =>
                console.log(err.message)
            )
            throw new Error("Invalid data was transferd")
        }

        students.addStudent(body);

        console.log(students.list);

        res.send(req.body);
    } catch (e) {
        console.log(e)
        res.status(400).send({ error: e.message });
    }

})

app.listen(port, () => {
    console.log(`The application is running in port:${port}`)
})