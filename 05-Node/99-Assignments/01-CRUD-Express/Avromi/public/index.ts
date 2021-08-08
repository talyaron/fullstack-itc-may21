async function getAllTask() { //YS: Nice
    try {
        const res = await axios.get('/tasks/')
        const allTasks = res.data
        renderTasks(allTasks);
    } catch (error) {
        console.log(error);
    }
}
getAllTask() //YS: Add an onload function. 


async function addTask(title) {
    try {
        const res = await axios.post('/tasks/newTask', { title })
        const allTasks = res.data
        renderTasks(allTasks);
    } catch (error) {
        console.log(error);
    }
}

async function editTask(id, newTitle) {
    try {
        const res = await axios.put('/tasks/editTask', { id, newTitle }) //YS: Id should be in params/query
        const allTasks = res.data
        renderTasks(allTasks);
    } catch (error) {
        console.log(error);
    }
}

async function deleteTask(id) {
    try {
        const res = await axios.delete(`/tasks/delete?id=${id}`) //YS: Nice
        const allTasks = res.data
        renderTasks(allTasks);
    } catch (error) {
        console.log(error);
    }
}

//render allTasks to DOM with a click for edit and delete abd update task



const form = document.querySelector(".main__form")
form.addEventListener('submit', handleSubmit);

function handleSubmit(ev: any): any {
    ev.preventDefault();
    const task = ev.target.elements.task.value;
    addTask(task)

    ev.target.reset();
}

function handleDelete(id): any {
    deleteTask(id);
}
const edit = document.querySelector(".edit");
function handleEdit(id, title): any { //YS: Good

    let html = '';

    html += `<h3>edit<h3><br>
    <form class="editForm" id="${id}" onsubmit="handleEditSubmit(event)">
    <input type="text" value="${title}" name="newTitle">
    <input onclick="closeEditWindow()" type="button" value="Cancel" id="cancel"> 
    <input type="submit" value="Edit"></form>`

    edit.innerHTML = html;
    edit.style.display = "block";
}

function handleEditSubmit(ev) {
    ev.preventDefault();
    const id = ev.target.id
    const newTitle = ev.target.elements.newTitle.value;
    editTask(id, newTitle)

    edit.style.display = "none";
}




function closeEditWindow(event) {

    edit.style.display = "none";
}


function renderTasks(data) {
    const tasksDiv = document.querySelector("#divcont")
    let html = "";
    data.forEach((task) => {
        html += ` <div class='tasks'><h3>${task.title}</h3>
        <button onclick="handleDelete('${task.id}')">Delete</button>
        <button onclick="handleEdit('${task.id}','${task.title}')">Edit</button>
        <input type="checkbox" name="done">
        </div>`
    })
    tasksDiv.innerHTML = html

}

