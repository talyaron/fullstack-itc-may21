const { throws } = require("assert");
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());



const readAllStudents = () => {
    const allStudents = fs.readFileSync('./allstudents.json');
    return JSON.parse(allStudents);
}

app.post("/addStudent", (req, res) => {
    try {

        const { id, name, age, avgrade } = req.body;

        const newStudent = {
            id: parseInt(id),
            name: name,
            age: parseInt(age),
            avgrade: parseInt(avgrade)
        }

        if (!name || !id || !age || !avgrade) {
            throw new Error("Don't have any of the element of the json object");
        }

        const allStudents = readAllStudents();
        const isFound = allStudents.some((student) => student.id == id);

        if (isFound) throw new Error("This is id is already here");


        function getStudent() {
            return function __getInfo(newStudent) {
                return newStudent
            }
        }

        const student = getStudent()

        allStudents.push(student(newStudent));


        fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));

        res.send("Student Added");

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});



app.get("/getAllStudents", (req, res) => {
    const allStudents = readAllStudents();
    res.send(allStudents);
});


app.delete("/deleteStudent/:id", (req, res) => {
    try {
        let { id } = req.params
        let allStudents = readAllStudents();
        id = parseInt(id)
        allStudents = allStudents.filter(student => student.id !== id)
        fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));
        res.send(allStudents);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});


app.get("/getStudentbyParam/:id", (req, res) => {
    try {
        let { id } = req.params
        id = parseInt(id)
        const allStudents = readAllStudents();
        const student = allStudents.find(student => student.id === id)
        if (!student) throw new Error ('This id does not exist')
        res.send([student]);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});


app.get("/getStudentbyQuery", (req, res) => {

    try {
        let { id } = req.query
        id = parseInt(id)
        const allStudents = readAllStudents();
        student = allStudents.find((student) => student.id === id)
        if (!student) throw new Error ('This id does not exist')
        res.send([student]);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

