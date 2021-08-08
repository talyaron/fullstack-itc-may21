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
uuidv4(); //YS: Why are you calling it here? 

//Joi is to validate the data I enter:
const Joi = require("joi");

app.use(express.json());
app.use(express.static('public'));

//This function is to read the array (I create this so the information will be kept even if I turn off the server)
function readJsonAllTasks() {
    try {
        const tasksList = fs.readFileSync("./allTasks.json");
        return JSON.parse(tasksList);
    } catch (error) {
        console.error(error);
    }
}

//Route to create a Task
app.post('/createTask', (req, res) => {
    try {
        const { body } = req;
        const schema = Joi.object({
            taskTitle: Joi.string().max(40).required(),
            taskDescription: Joi.string().max(200).required(),
        });
        const { error, value } = schema.validate({   //YS: Very nice
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
    } catch (error) {
        console.error(error); //YS: Good! This should be res.status(500).send(error.message)
    };
});

//Route to get all the Tasks
app.get('/getAllTasks', (req, res) => {
    try {
        const allTasks = readJsonAllTasks();
        res.send(allTasks);
    } catch (error) {
        console.error(error); //YS: Not console log! res.status(400/500).send(error.message)
    }
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
        res.status(400).send(error); //YS: error.message
    }
});

//Route to update a Task
app.put('/editTask/:id', (req, res) => {
    try {
        const { taskTitle, taskDescription, taskStatus } = req.body;
        const { id } = req.params;
        let allTasks = readJsonAllTasks();
        const taskIndex = allTasks.findIndex(task => task.id === id); //YS: Why not use find?
        if (taskIndex > -1) {
            allTasks[taskIndex].title = taskTitle;
            allTasks[taskIndex].description = taskDescription;
            allTasks[taskIndex].status = taskStatus;
            fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
            res.send({ message: 'A task was updated', tasks: allTasks })
        } else {
            res.send({ message: 'Couldnt find a task to update', tasks: allTasks })  //YS: res.status(400).send....
        }
    } catch (e) {
        res.status(400).send(error);
    }
});

//Route to update the status of a Task with the Drag and Drop tool
app.put('/editStatusTask/:id/:status', (req, res) => {
    try {
        const { id, status } = req.params;
        let allTasks = readJsonAllTasks();
        const taskIndex = allTasks.findIndex(task => task.id === id); //YS: Why not use find?
        if (taskIndex > -1) {
            allTasks[taskIndex].status = status;
            fs.writeFileSync("./allTasks.json", JSON.stringify(allTasks));
            res.send({ message: 'The status of the task was updated', tasks: allTasks })
        } else {
            res.send({ message: 'Couldnt find a task to update', tasks: allTasks })
        }
    } catch (e) {
        res.status(400).send(error); //YS: error.message
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