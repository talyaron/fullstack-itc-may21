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

function handleEdit(id): any {
    console.log(id);
}


function renderTasks(data) {
    const tasksDiv = document.querySelector("#divcont")
    let html = "";
    data.forEach((task) => {
        html += ` <div class='tasks'><h3>${task.title}</h3>
        <button onclick="handleDelete('${task.id}')">Delete</button>
        <button onclick="handleEdit('${task.id}')">Edit</button>
        <input type="checkbox" name="done">
        </div>`
    })
    tasksDiv.innerHTML = html

}

