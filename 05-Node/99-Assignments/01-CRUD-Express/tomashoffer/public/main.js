// QUERY SELECTOR 
let deleteIcon = document.querySelector('.delete');
let editIcon = document.querySelector('.edit');

// QUERYSELECTOR
const taskInp = document.querySelector('#task_input')
const dateInp = document.querySelector('#date_input')
const statusInp = document.querySelector('#status_input');


// FUNCION HANDLE FORM
function handleSubmit(e){
    e.preventDefault();
    try{
    let task = e.target.elements.task.value;
    let date = e.target.elements.date.value;
    let status = e.target.elements.status.value;
    const newTask = {task, date, status};
    postTask(newTask);
    }catch (error) {
        console.error(error)
    }
}

// FUNCION DE RENDERIZADO
function renderTasks(arr){
    try{
    if (!Array.isArray(arr)) throw new error('For render its must be an array!')
    const root = document.querySelector('.lista-ol');
    let html = '';
    arr.forEach(tsk=>{html += `   <li class="list-group-item d-flex justify-content-between align-items-start lista-item">
    <div class="ms-2 me-auto">
        <div class="fw-bold">TASK: ${tsk.task}</div>
        <div class="fw-bold">DATE: ${tsk.date}</div>
        <div class="fw-bold">STATUS: ${tsk.status}</div>
    </div>
    <i onclick='setCurrentId("${tsk.id}")' data-toggle="modal" data-target="#exampleModalCenter" class="edit fas fa-edit fa-lg"></i>
    <i onclick='deleteTasks("${tsk.id}")' class="delete far fa-trash-alt fa-lg"></i>
    </li>`
        });   root.innerHTML = html; 
    }catch(e){console.error(e)}
}
// FUNCION POST DATA
async function postTask(task){
    try{
    const response = await axios.post('/tasks', task);
    renderTasks(response.data)
    }catch(e){console.error(e)} //YS: You wont have an error since you are not sending an error from the BE, your BE will just crash. 
}
    
// FUNCION DELETE
async function deleteTasks(id){
    try{
    if (!id) throw new error('We need an ID for the delete')
    //YS: You should have an alert message here before deleting: Are you sure you want to delete?
    const response = await axios.delete(`/tasks/${id}`)
    let responseData = response.data;
    console.log(responseData);
    renderTasks(responseData);
    }catch(e) {console.error(e);}
}
let currentId;
function setCurrentId(id){
 currentId = id;
}
// FUNCION HANDLE MODAL
async function handleEdit(e){
    e.preventDefault();
    try{
    let id = currentId; //YS: Why dont you just use the currentId instead of changing it back to ID? You can call it taskToEditId?
    const taskEdit = document.querySelector('#taskName').value;
    const dateEdit = document.querySelector('#dateName').value;
    const statusEdit = document.querySelector('#statusName').value;
    const updateTask = {taskEdit, dateEdit, statusEdit, id} 
    console.log(updateTask) //YS: ?
    const response = await axios.put(`/tasks`, updateTask);
    const responseData = response.data;
    console.log(response.data) //YS: ?
    renderTasks(responseData);
    
    }catch(e) {console.error(e)}
}
// FUNCION GET DATA 
async function getAllTasks(){
    
    try{
    const response = await axios.get('/tasks');
    renderTasks(response.data)
    }catch(e) {console.error(e)}
}
getAllTasks();