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

//Uuidv4 is to generate a new ID
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(express.json());
app.use(express.static('public'));

class Tasks {
    list = [];

    addTaks(task) {
        this.list.push(task)
    };
};

const tasks = new Tasks();

//Route to get all the Tasks
app.get('/getAllTasks', (req, res) => {
    res.send(tasks.list);
});

//Route to create a Task
app.post('/createTask', (req, res) => {
    const { taskTitle, taskDescription } = req.body;
    const task = {
        id: uuidv4(),
        title: taskTitle,
        description: taskDescription,
        status: 'toDo'
    };
    tasks.addTaks(task);
    res.send({ message: 'A new Task was added', tasks: tasks.list });
});

//Route to delete a Task
app.delete('/deleteTask/:id', (req, res) => {
    try {
        const { id } = req.params
        tasks.list = tasks.list.filter(task => task.id !== id);
        res.send(({ message: 'A task was deleted', tasks: tasks.list }));
    } catch (e) {
        res.status(400).send(error);
    }
});

//Route to update a Task
app.put('/editTask/:id', (req, res) => {
    try {
        const { taskTitle, taskDescription, taskStatus } = req.body;
        const { id } = req.params;

        const taskIndex = tasks.list.findIndex(task => task.id === id);
        if (taskIndex > -1) {
            tasks.list[taskIndex].title = taskTitle;
            tasks.list[taskIndex].description = taskDescription;
            tasks.list[taskIndex].status = taskStatus;
            res.send(tasks.list);
            res.send({ message: 'A task was updated', tasks: tasks.list })
        } else {
            res.send({ message: 'Couldnt find a task to update', tasks: tasks.list })
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