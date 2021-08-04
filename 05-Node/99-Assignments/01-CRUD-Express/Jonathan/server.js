const express = require("express");
const app = express();
const port = process.env.port || 3000;
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

app.use(express.static("public"));
app.use(express.json());

const readAllTasks = () => {
    const allTasks = fs.readFileSync("./task.json");
    return JSON.parse(allTasks);
}



app.post("/addTask", (req, res) => {
    try {
        console.log(req.body)
        const { title, description, date, min, emoji, status } = req.body;

        const newTask = {
            id: uuidv4(),
            title: title,
            description: description,
            date: date,
            min: min,
            emoji: emoji,
            status: status,
        }

        if (!title || !description || !date || !min || !emoji || !status) {
            throw new Error("Don't have any of the element of the json object");
        }

        const allTasks = readAllTasks();

        allTasks.push(newTask);

        fs.writeFileSync("./task.json", JSON.stringify(allTasks));

        res.send({ ok: "Added Task", task:allTasks });

    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});

app.get("/getAllTask", (req, res) => {
    const allTasks = readAllTasks();
    res.send(allTasks);
});

app.delete("/deleteTask/:id", (req, res) => {
    try {
        let { id } = req.params
        let allTasks = readAllTasks();
        allTasks = allTasks.filter(task => task.id !== id)
        fs.writeFileSync("./task.json", JSON.stringify(allTasks));
        //allStudents.sort(function (a, b){return (a.id - b.id)})
        res.send(allTasks);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});

app.put("/doneTask/:id", (req, res) => {
    try {
        let { id } = req.params
        let allTasks = readAllTasks();
        task = allTasks.find(task => task.id === id)
        task.status = 'done'
        fs.writeFileSync("./task.json", JSON.stringify(allTasks));
        //allStudents.sort(function (a, b){return (a.id - b.id)})
        res.send(allTasks);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});

app.put("/updateTask/:id", (req, res) => {
    try {
        let { id } = req.params
        const { title, description, date, min, emoji, status } = req.body

        if (!title || !description || !date || !min || !emoji || !status) {
            throw new Error("Don't have any of the element of the json object");
        }

        let allTasks = readAllTasks();

        task = allTasks.find(task => task.id === id)

        task.title = title
        task.description = description
        task.emoji = emoji;
        task.status = status;
        task.date = date;
        task.min = min;

        fs.writeFileSync("./task.json", JSON.stringify(allTasks));
        //allStudents.sort(function (a, b){return (a.id - b.id)})
        res.send(allTasks);
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
});

app.get("/getTask/:id", (req, res) => {
    let { id } = req.params
    const allTasks = readAllTasks();
    task = allTasks.find(task => task.id === id)
    res.send(task);
});

app.get("/getPriority/:status", (req, res) => {
    let { status } = req.params
    const allTasks = readAllTasks();
    if (status !== 'everything') {
        task = allTasks.filter(task => task.status === status)
        res.send(task)
    }else{
        res.send(allTasks)
    }
    
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
