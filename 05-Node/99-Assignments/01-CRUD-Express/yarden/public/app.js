/*
This is the client side main js file.
*/

class Task {
    constructor(text) {
        this.text = text
        this.id = Math.random().toString(16).slice(2)
        this.isDone = false
    }
    update(newTask) {
        this.text = newTask.text
    }
}

// The tasks array
let tasks = []


/* Add */

const form = document.querySelector('#add-task-form')
const modal = document.querySelector('.add-task-modal')
form.addEventListener('submit', handleSubmit)

function handleSubmit(ev) {
    ev.preventDefault()
    const taskText = ev.target[0].value
    if (!taskText) throw new Error('Please enter description.')
    const newTask = new Task(taskText)
    tasks.push(newTask)
    console.log(tasks)
    renderTaskList()
    modal.classList.add('hide')
    ev.target.reset()
}


/* Render */
const renderTaskList = () => {
    function checkIsDone(isDone) {
        if (isDone) {
            return "done"
        }
    }

    let taskHtml = tasks.map(task => {
    return (`
<div class="task" draggable="true">  
    <div class="task__done-button">
        <img src="./images/sword.png" alt="Done" onclick='toggleDone("${task.id}")'>
    </div>
    <p class="task__text ${checkIsDone(task.isDone)}">${task.text}</p>
    <div class="task__buttons-wrapper">
        <div class="edit-button-wrapper">
            <i onclick='getIdForUpdate("${task.id}")' class="fas fa-pencil-alt fa-lg"></i>
        </div>
        <div class="delete-button-wrapper">
            <i onclick='handleDelete("${task.id}")' class="fas fa-trash fa-lg"></i>
        </div>
    </div>
</div> 
`)
    }).join('')
    document.querySelector('.list__body').innerHTML = taskHtml
}

// async function getAllTasks() {
//     try {
//         const tasksData = await axios.get('/getAllTasks');
//         renderTask(tasksData.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

/* Update */
function getIdForUpdate(taskId) {
    openEditModal()
    const taskToUpdate = tasks.find(task => task.id === taskId)
    return taskToUpdate.id
}

function handleUpdate(ev) {
    ev.preventDefault()
    
    ev.target.reset()
}


/* Delete */

function handleDelete(taskId) {
    const taskToDelete = tasks.find(task => task.id === taskId)
    const filteredTasks = tasks.filter(task => task.id !== taskToDelete.id)
    tasks = filteredTasks
    renderTaskList()
}

/* Send info to server with axios */

// Handle done:
function toggleDone(taskId) {
    const task = tasks.find(task => task.id === taskId)
    task.isDone = !task.isDone
    renderTaskList()
}