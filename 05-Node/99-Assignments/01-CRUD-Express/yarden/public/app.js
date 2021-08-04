/*
This is the client side main js file.
*/

class Task {
    constructor(text) {
        this.text = text
        this.id = Math.random().toString(16).slice(2)
    }
}

// The tasks array
const tasks = []


/* Add */

const form = document.querySelector('#add-task-form')
form.addEventListener('submit', handleSubmit())

const handleSubmit = (ev) => {
    ev.preventDefault()
    const taskText = ev.target[0].value
    const newTask = new Task(taskText)
    addTask(newTask)
    renderTaskList()
}

const addTask = (tasks) => tasks.unshift(newTask)

/* Render */
const renderTaskList = (tasks) => {

    let taskHtml = tasks.map(task => {
    return (`
<div class="task">
<div class="task__done-button">
    <img src="./images/sword.png" alt="">
</div>
<p class="task__text">${task.text}</p>
<div class="task__buttons-wrapper">
    <div class="edit-button-wrapper">
        <i onclick='handleUpdate("${task.id}")' class="fas fa-pencil-alt fa-lg"></i>
    </div>
    <div class="delete-button-wrapper">
        <i onclick='handleDelete("${task.id}")' class="fas fa-trash fa-lg"></i>
    </div>
</div>
</div> 
`).join('')
    }) 
}

/* Update */

const handleUpdate = (ev) => {

}

const updateTask = (ev) => {

}

/* Delete */

const handleDelete = (ev) => {
    
}

const deleteTask = (ev) => {

}


/* Send info to server with axios */