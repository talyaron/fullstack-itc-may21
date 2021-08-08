/*
This is the client side main js file.

Functions:
- Add task
- Render tasks
- Update task
- Delete task
- Handle "Done"
- Init func to update the tasks each time
*/

// The tasks array
<<<<<<< HEAD
const tasks = []
=======
let tasks = [] //YS: This should come from the BE

>>>>>>> f85ee9ef3c0f1768ef326cb878700bf303ac00e5

/* Add */
const form = document.querySelector('#add-task-form')
const modal = document.querySelector('.add-task-modal')
form.addEventListener('submit', handleSubmit)

<<<<<<< HEAD
async function handleSubmit(ev) {
=======
function handleSubmit(ev) { //YS: Where is your fetch/axios? 
>>>>>>> f85ee9ef3c0f1768ef326cb878700bf303ac00e5
    ev.preventDefault()
    const taskText = ev.target[0].value
    if (!taskText) throw new Error('Please enter description.')
    const newTask = await postTask(taskText)
    tasks.push(newTask)
    renderTaskList()
    modal.classList.add('hide')
    ev.target.reset()
}

/* Render */
const renderTaskList = () => {
    // Check if task is done, to add the class "done"
    function checkIsDone(isDone) {
        if (isDone) {
            return "done"
        }
    }
    let taskHtml = tasks.map(task => {
    return (`
<div class="task-wrapper">
    <div class="task">  
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
</div> 
`)
    }).join('')
    document.querySelector('.list__body').innerHTML = taskHtml
}

/* Update */
<<<<<<< HEAD
function getIdForUpdate(taskId) {
    const id = document.querySelector('#task-id')
    id.value = taskId
=======
function getIdForUpdate(taskId) { //YS: Where is your fetch/axios? 
>>>>>>> f85ee9ef3c0f1768ef326cb878700bf303ac00e5
    openEditModal()
    const taskToUpdate = tasks.find(task => task.id === taskId)
    return taskToUpdate.id
}

async function handleUpdate(ev) {
    ev.preventDefault()
    const taskId = document.querySelector('#task-id').value
    const taskIndex= tasks.findIndex(task => task.id === taskId)
    const taskToUpdate = tasks[taskIndex]
    taskToUpdate.text = ev.target.elements[0].value
    console.log(taskToUpdate)
    const updatedTask = await putTask(taskToUpdate)
    tasks[taskIndex] = updatedTask
    ev.target.reset()
    closeEditModal()
    renderTaskList()
}

/* Delete */
<<<<<<< HEAD
async function handleDelete(taskId) {
=======

function handleDelete(taskId) { //YS: Where is your fetch/axios? 
>>>>>>> f85ee9ef3c0f1768ef326cb878700bf303ac00e5
    const taskToDelete = tasks.find(task => task.id === taskId)
    console.dir(taskToDelete);
    const tasksAfterDelete = await deleteTask(taskToDelete.id)
    tasks.splice(0, tasks.length)
    tasks.push(...tasksAfterDelete)
    console.log(tasks)
    renderTaskList()
}

// Handle done:
async function toggleDone(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    const task = tasks[taskIndex]
    task.isDone = !task.isDone
    const updatedTask = await putTask(task)
    tasks[taskIndex] = updatedTask
    renderTaskList()
}

// Initiation func for getting tasks and rendering
async function init() {
    const arr = await getAllTasks()
    tasks.push(...arr)
    renderTaskList()
    console.log(tasks);
}
init()