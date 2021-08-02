const express = require("express");
const app = express();
const port = process.env.port || 3000;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());



const readAllStudents = () => {
    const allStudents = fs.readFileSync("./allstudents.json");
    return JSON.parse(allStudents);
}

app.post("/addStudent", (req, res) => {
    try {

        const { id, name, age, avgrade } = req.body;

        const newStudent = {  /* YS: Why are you doing this if newStudent will be the same as the req.body? DRY
                                Also, you should be adding the ID here. The ID and another field called dateCreated should be
                                managed by the BE*/
            id: id,
            name: name,
            age: age,
            avgrade: avgrade
        }

         if (!name || !id || !age || !avgrade) {
             throw new Error("Don't have any of the element of the json object");
         }

        const allStudents = readAllStudents();
        const isFound = allStudents.some((student) => student.id == id);

        if (isFound) throw new Error("This Mispar Zehut is already here");


        function getStudent() {
            return function __getInfo(newStudent) { //YS: I didnt understand where you got the __getinfo function from...
                return newStudent
            }
        }

        const student = getStudent()

        console.log(student(newStudent))

        allStudents.push(student(newStudent));


        fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));

        res.send({ ok: "Added Student" });

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});



app.get("/getAllStudents", (req, res) => {
    const allStudents = readAllStudents();
    allStudents.sort(function (a, b){return (a.id - b.id)}) //YS: Nice! 
    res.send(allStudents);
});


app.delete("/deleteStudent/:id", (req, res) => {
    try {
        let { id } = req.params
        let allStudents = readAllStudents();
        id = +id //YS: Nice! 
        allStudents = allStudents.filter(student => student.id !== id)
        fs.writeFileSync("./allstudents.json", JSON.stringify(allStudents));
        allStudents.sort(function (a, b){return (a.id - b.id)})
        res.send(allStudents);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});


app.get("/getStudentbyParam/:id", (req, res) => {
    try {
        let { id } = req.params
        id = +id
        const allStudents = readAllStudents();
        const student = allStudents.find(student => student.id === id)
        if (!student) throw new Error('This Mispar Zehut does not exist')
        res.send([student]);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});


app.get("/getStudentbyQuery", (req, res) => {

    try {
        let { id } = req.query
        id = +id
        const allStudents = readAllStudents();
        student = allStudents.find((student) => student.id === id)
        if (!student) throw new Error('This Mispar Zehut does not exist')
        res.send([student]);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

