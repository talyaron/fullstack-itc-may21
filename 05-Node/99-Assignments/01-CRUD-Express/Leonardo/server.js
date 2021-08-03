/* You should have a list of tasks
create a task
update a task (done/not done/ update text)
delete a task

make it responsive, and look and feel of KEEP

//optional
order tasks
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

//Uuidv4 is to generate a new ID
const { v4: uuidv4 } = require('uuid');
uuidv4();

//Joi is to validate the data I enter:
const Joi = require("joi");

app.use(express.json());
app.use(express.static('public'));

//This function is to read the array (I create this so the information will be kept even if I turn off the server)
function readJsonAllTasks() {
    const tasksList = fs.readFileSync("./allTasks.json");
    return JSON.parse(tasksList);
}

//Route to create a Task
app.post('/createTask', (req, res) => {
    const { body } = req;
    const schema = Joi.object({
        taskTitle: Joi.string().max(40).required(),
        taskDescription: Joi.string().max(200).required(),
    });
    const { error, value } = schema.validate({
        taskTitle: body.taskTitle,
        taskDescription: body.taskDescription,
    });
    if (!error) {
        const task = {
            id: uuidv4(),
            dateCreated: Date.now(),
            title: value.taskTitle,
            description: value.taskDescription,
            status: 'toDo'
        };
        const allTasks = readJsonAllTasks();
        allTasks.push(task);
        fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
        res.send({ message: 'A new Task was added', tasks: allTasks });
    } else {
        const msg = error.details[0].message;
        res.status(400).send(msg);
    }
});

//Route to get all the Tasks
app.get('/getAllTasks', (req, res) => {
    const allTasks = readJsonAllTasks();
    res.send(allTasks);
});

//Route to delete a Task
app.delete('/deleteTask/:id', (req, res) => {
    try {
        const { id } = req.params;
        let allTasks = readJsonAllTasks();
        allTasks = allTasks.filter(task => task.id !== id);
        fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
        res.send(({ message: 'A task was deleted', tasks: allTasks }));
    } catch (e) {
        res.status(400).send(error);
    }
});

//Route to update a Task
app.put('/editTask/:id', (req, res) => {
    try {
        const { taskTitle, taskDescription, taskStatus } = req.body;
        const { id } = req.params;
        let allTasks = readJsonAllTasks();
        const taskIndex = allTasks.findIndex(task => task.id === id);
        if (taskIndex > -1) {
            allTasks[taskIndex].title = taskTitle;
            allTasks[taskIndex].description = taskDescription;
            allTasks[taskIndex].status = taskStatus;
            fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
            res.send({ message: 'A task was updated', tasks: allTasks })
        } else {
            res.send({ message: 'Couldnt find a task to update', tasks: allTasks })
        }
    } catch (e) {
        res.status(400).send(error);
    }
});

//This function is to listen to the port
app.listen(port, () => {
    try {
        console.log(`The server is running at port:${port}`)
    } catch (error) {
        res.status(500).send(error);
    }
});