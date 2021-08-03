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

//Get the tasks information:
async function getAllTasks() {
    try {
        const tasksData = await axios.get('/getAllTasks');
        renderTask(tasksData.data.tasks);
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
                    <input type="text" name="title" id="firstname" maxlength="40" value=${element.title} required>
                    </div>
    
                    <div class="form__wrapper">
                    <label for="description">Description:</label>
                    <input type="text" name="description" id="description" cols="30" rows="10"
                    maxlength="200" value=${element.description} required>
                    </div>
    
                    <div>
                        <label for="toDo">To Do</label>
                        <input type="radio" id="toDo" name="status" value="toDo" checked />
    
                        <label for="inProgress">In Progress</label>
                        <input type="radio" id="inProgress" name="status" value="inProgress" />
    
                        <label for="done">Done</label>
                        <input type="radio" id="done" name="status" value="done" />
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

        const tasksData = await axios.put(`/editTask/${taskIdEdit}`, { taskTitle, taskDescription, taskStatus });
        //location.reload();
        renderTask(tasksData.data.tasks);

    } catch (error) {
        console.error(error);
    };
};

//Function to render the data of the tasks in the DOM
async function renderTask(data) {
    const html = data.map(task => {
        return `<button class='tasks' id='${task.id}name' draggable="true" onclick=uploadTask("${task.id}")>
                    <div class='tasks__delete'>
                        <h4> ${task.title} </h4>
                        <td><i class="fas fa-trash tasks__delete--button" onclick='deleteTask("${task.id}")' title="Remove"></i></td>             
                    </div>
                    <p> ${task.description} </p>
                </button>`
    }).join('');

    document.getElementById('toDo').innerHTML = html
};