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
    try {
        const toDoElement = document.querySelector('#toDo');
        if (!toDoElement) throw new Error('Can´t find the element "toDo"');
        const htmltoDo = renderThrough(data, 'toDo');
        toDoElement.innerHTML = htmltoDo;

        const inProgressElement = document.querySelector('#inProgress');
        if (!inProgressElement) throw new Error('Can´t find the element "inProgress"');
        const htmlInProgress = renderThrough(data, 'inProgress');
        inProgressElement.innerHTML = htmlInProgress;

        const doneElement = document.querySelector('#done');
        if (!doneElement) throw new Error('Can´t find the element "done"');
        const htmlDone = renderThrough(data, 'done');
        doneElement.innerHTML = htmlDone;
    } catch (error) {
        console.error(error);
    };
};

//This function is a continuation of a function "renderTask(data)", because I split the tasks by status
function renderThrough(data, status) {
    try {
        const toShow = data.map(task => {
            if (task.status === status) {
                let taskDateCreated = readableDate(task.dateCreated);
                return `<div class='tasks ${status}' id='${task.id}' draggable="true" ondragstart="onDragStart(event)">
                    <button class="tasks__edit" id='${task.id}name' onclick=uploadTask("${task.id}")>
                        <h4> ${task.title} </h4>             
                        <p> ${task.description} </p>
                    </button>
                    <div class="tasks__info">
                    <p><i class="fas fa-trash tasks__delete--button" onclick='deleteTask("${task.id}")' title="Remove"></i></p>
                    <span class="tasks__info--date">${taskDateCreated}</span>
                    </div>
                    </div>`
            }
        }).join('');
        return toShow;
    } catch (error) {
        console.error(error);
    };
};

//This function is to edit the format for the Date that Im going to show in the DOM
function readableDate(date) { //YS: Nice! There is a library called moment which does this for you. 
    try {
        const today = new Date(date);
        const options = { day: 'numeric', month: 'numeric', year: '2-digit' };
        return today.toLocaleDateString('en-GB', options);
    } catch (error) {
        console.error(error);
    };
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
let taskIdEdit = ''; //YS: You can just do: let taskIdEdit;

async function uploadTask(id) { //YS: Nice! Thought it should be called updateTask
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
                    `<div id="checkRadioButton" onmouseenter='radioButtonCheck("${element.status}")'>
                    <div class="form__wrapper">
                    <label for="title">Title:</label>
                    <input class="form__input" type="text" name="title" id="title" maxlength="40" value="${element.title}" required>
                    </div>
    
                    <div class="form__wrapper">
                    <label for="description">Description:</label>
                    <textarea class="form__textarea" type="text" name="description" id="description" cols="30" rows="10"
                    maxlength="200" required>${element.description}</textarea>
                    </div>
    
                    <div class="form__wrapper">
                    <label>Status:</label>
                        <div class="form__radio">
                        <label for="toDo2">To Do</label>
                        <input type="radio" id="toDo2" name="status" value="toDo"/>
    
                        <label for="inProgress2">In Progress</label>
                        <input type="radio" id="inProgress2" name="status" value="inProgress"/>
    
                        <label for="done2">Done</label>
                        <input type="radio" id="done2" name="status" value="done"/>
                        </div>
                    </div>
                    <input class="form__input--submit" type="submit" value="Save changes">
                    </div>`
                )
            }
        }).join('');
        formEdit.innerHTML = html;
        taskIdEdit = id; //YS: Nice
    } catch (error) {
        console.error(error);
    };
}

//In the "form Edit" I stablish the previous checked value that the element already has 
function radioButtonCheck(status) {
    try {
        const elementWithTheEvent = document.querySelector('#checkRadioButton');
        if (!elementWithTheEvent) throw new Error('The is a problem finding the element to check the radio button');

        const radioToDo = document.querySelector('#toDo2');
        if (!radioToDo) throw new Error('The is a problem finding the element "toDo" radio button');

        const radioInProgress = document.querySelector('#inProgress2');
        if (!radioInProgress) throw new Error('The is a problem finding the element "inProgress" radio button');

        const radioDone = document.querySelector('#done2');
        if (!radioDone) throw new Error('The is a problem finding the element "done" radio button');

        switch (status) {
            case 'toDo':
                radioToDo.checked = true;
                break;

            case 'inProgress':
                radioInProgress.checked = true;
                break;

            case 'done':
                radioDone.checked = true;
                break;
        };

        //With this the event is going to happen only once
        elementWithTheEvent.onmouseenter = null;
    } catch (error) {
        console.error(error);
    };
};

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