const path = require('path')
const filePath = path.resolve(__dirname, 'tasks.json')
const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');


function getAllTasks() {
    const allTasks = fs.readFileSync(filePath);
    console.log(allTasks);
    const parsed = JSON.parse(allTasks)
    return parsed
}



function addTask(title) {

    const allTasks = getAllTasks();
    const task = {
        title,
        id: uuidv4()
    }

    allTasks.push(task);

    fs.writeFileSync(filePath, JSON.stringify(allTasks));
    return allTasks
}

function deleteTask(id) {

    const allTasks = getAllTasks();

    const filteredTasks = allTasks.filter(task => task.id !== id)

    fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
    return filteredTasks
}



exports.getAllTasks = getAllTasks
exports.addTask = addTask
exports.deleteTask = deleteTask