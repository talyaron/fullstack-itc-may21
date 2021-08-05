// QUERY SELECTOR 
let deleteIcon = document.querySelector('.delete');
let editIcon = document.querySelector('.edit');

// QUERYSELECTOR
const taskInp = document.querySelector('#task_input')
const dateInp = document.querySelector('#date_input')
const statusInp = document.querySelector('#status_input');

const updTask = [];

// FUNCION HANDLE FORM
function handleSubmit(e){
    e.preventDefault();
    let task = e.target.elements.task.value;
    let date = e.target.elements.date.value;
    let status = e.target.elements.status.value;
    const newTask = {task, date, status};
    postTask(newTask);
}
// FUNCION HANDLE MODAL
function handleEdit(e){
    e.preventDefault();
    let task = e.target.elements.taskEdit.value;
    let date = e.target.elements.dateEdit.value;
    let status = e.target.elements.statusEdit.value;
    const updateTask = {task, date, status} 
    updTask.push(updateTask);

}
// FUNCION DE RENDERIZADO
function renderTasks(arr){
    const root = document.querySelector('.lista-ol');
    let html = '';
    arr.forEach(tsk=>{html += `   <li class="list-group-item d-flex justify-content-between align-items-start lista-item">
    <div class="ms-2 me-auto">
        <div class="fw-bold">TASK: ${tsk.task}</div>
        <div class="fw-bold">DATE: ${tsk.date}</div>
        <div class="fw-bold">STATUS: ${tsk.status}</div>
    </div>
    <i onclick='updateTasks("${tsk.id}")' data-toggle="modal" data-target="#exampleModalCenter" class="edit fas fa-edit fa-lg"></i>
    <i onclick='deleteTasks("${tsk.id}")' class="delete far fa-trash-alt fa-lg"></i>
    </li>`
        });   root.innerHTML = html; 
    }
// FUNCION POST DATA
async function postTask(task){
    const response = await axios.post('/tasks', task);
    renderTasks(response.data)
}
    
// FUNCION DELETE
async function deleteTasks(id){
    const response = await axios.delete(`/tasks/${id}`)
    let responseData = response.data;
    console.log(responseData);
    renderTasks(responseData);
}


// FUNCION UPDATE
async function updateTasks(id){
    const newTask = document.querySelector('#taskName').value;
    const newDate = document.querySelector('#dateName').value;
    const newStatus = document.querySelector('#statusName').value;
    // const newTask = updTask[updTask.length - 1].task;
    // const newDate = updTask[updTask.length - 1].date;
    // const newStatus = updTask[updTask.length - 1].status;
    const newId = id;
    const response = await axios.put(`/tasks`, {task: newTask, date: newDate, status: newStatus, id: newId});
    const responseData = response.data;
    renderTasks(responseData);
}
// FUNCION GET DATA
async function getAllTasks(){
    const response = await axios.get('/tasks');
    console.log(response.data)
    renderTasks(response.data)
}
getAllTasks();