//Handle the form to create a new Task:
const handleForm = document.querySelector(".form");
handleForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    try {
        event.preventDefault();
        let { taskTitle, taskDescription } = event.target.elements;
        taskTitle = taskTitle.value;
        taskDescription = taskDescription.value;
        if (!taskTitle || !taskDescription)
            throw new Error("Please complete all the fields");
        modalCreate.style.display = "none";
        event.target.reset();

        const tasksData = await axios.post('/createTask', { taskTitle, taskDescription });
        renderTask(tasksData.data.tasks);
    } catch (e) {
        console.error();
    }
};

//Function to render the data of the tasks in the DOM
function renderTask(data) {

    const htmlInProgress = data.map(task => {
        if (task.status === 'inProgress') {
            return `<div class='tasks inProgress' draggable="true">
                <button class="tasks__edit" id='${task.id}name' onclick=uploadTask("${task.id}")>
                    <h4> ${task.title} </h4>             
                    <p> ${task.description} </p>
                </button>
                <p><i class="fas fa-trash tasks__delete--button" onclick='deleteTask("${task.id}")' title="Remove"></i></p>
                </div>`
        }
    }).join('');

    document.getElementById('inProgress').innerHTML = htmlInProgress;

    //////////////
    const htmlDone = data.map(task => {
        if (task.status === 'done') {
            return `<div class='tasks done' draggable="true">
                <button class="tasks__edit" id='${task.id}name' onclick=uploadTask("${task.id}")>
                    <h4> ${task.title} </h4>             
                    <p> ${task.description} </p>
                </button>
                <p><i class="fas fa-trash tasks__delete--button" onclick='deleteTask("${task.id}")' title="Remove"></i></p>
                </div>`
        }
    }).join('');

    document.getElementById('done').innerHTML = htmlDone

    //////////////
    const htmltoDo = data.map(task => {
        if (task.status === 'toDo') {
            return `<div class='tasks toDo' draggable="true">
                <button class="tasks__edit" id='${task.id}name' onclick=uploadTask("${task.id}")>
                    <h4> ${task.title} </h4>             
                    <p> ${task.description} </p>
                </button>
                <p><i class="fas fa-trash tasks__delete--button" onclick='deleteTask("${task.id}")' title="Remove"></i></p>
                </div>`
        }
    }).join('');
    const todoRoot = document.getElementById('toDo');
    debugger;
    console.dir(todoRoot);
    todoRoot.innerHTML = htmltoDo
};

//Get the tasks information:
async function getAllTasks() {
    try {
        const tasksData = await axios.get('/getAllTasks');
        renderTask(tasksData.data);
    } catch (error) {
        console.log(error);
    }
};

//Delete a task:
async function deleteTask(id) {
    try {
        const option = confirm(`Are you sure do you want to delete this task?`);
        if (option) {
            const tasksData = await axios.delete(`/deleteTask/${id}`);
            renderTask(tasksData.data.tasks);
        }
    } catch (error) {
        console.error(error);
    }
};

//Update a task:
//This will contain the Task ID to Edit
let taskIdEdit = '';

async function uploadTask(id) {
    try {
        if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
        modalEdit.style.display = "block";
        modalEdit.classList.add("showModal");
        const formEdit = document.querySelector("#formEdit");
        if (!formEdit) throw new Error('There is a problem finding form from HTML');
        const tasksData = await axios.get('/getAllTasks');
        let html = tasksData.data.map(element => {
            if (element.id === id) {
                return (
                    `<h1>EDIT TASK</h1>
                    
                    <div class="form__wrapper">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" maxlength="40" value="${element.title}" required>
                    </div>
    
                    <div class="form__wrapper">
                    <label for="description">Description:</label>
                    <textarea type="text" name="description" id="description" cols="30" rows="10"
                    maxlength="200" required>${element.description}</textarea>
                    </div>
    
                    <div>
                        <label for="toDo2">To Do</label>
                        <input type="radio" id="toDo2" name="status" value="toDo" checked />
    
                        <label for="inProgress2">In Progress</label>
                        <input type="radio" id="inProgress2" name="status" value="inProgress" />
    
                        <label for="done2">Done</label>
                        <input type="radio" id="done2" name="status" value="done" />
                    </div>
                    <input class="form__input--submit" type="submit" value="Save changes">`
                )
            }
        }).join('');
        formEdit.innerHTML = html;
        taskIdEdit = id;
    } catch (error) {
        console.error(error);
    };
}

//Handle Edit
async function handleEdit(ev) {
    ev.preventDefault();
    try {
        let { title, description, status } = ev.target.elements;
        taskTitle = title.value;
        taskDescription = description.value;
        taskStatus = status.value;
        if (!taskTitle || !taskDescription || !taskStatus)
            throw new Error("You need to complete all the fields");

        if (!modalEdit) throw new Error('There is a problem finding modalEdit from HTML');
        modalEdit.style.display = "none";
        ev.target.reset();

        let tasksData = await axios.put(`/editTask/${taskIdEdit}`, { taskTitle, taskDescription, taskStatus });

        const { tasks } = tasksData.data;
        renderTask(tasks);

    } catch (error) {
        console.error(error);
    };
};