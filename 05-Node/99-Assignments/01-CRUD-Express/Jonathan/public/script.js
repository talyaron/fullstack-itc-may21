
//section
const btnTask = document.querySelector('.section--btn--all')
const btnModal = document.querySelector('.section--btn--add')
const btnOrderbyDate = document.querySelector('.section--btn--order')
//

const bgModal = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
let addTask = document.querySelector('.modal-bg__modal__form--buttons--add')
let editTask = document.querySelector('.modal-bg__modal__form--buttons--edit')
const btnColor = document.querySelector('.header__right--color--paint')
const inputSearch = document.querySelector('#filterstatus')

//addEventListner
btnModal.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
addTask.addEventListener('click', handleSumbit)
btnTask.addEventListener('click', getAllTask)
editTask.addEventListener('click', updateTaskOnDOM)
btnColor.addEventListener('click', setColor)
inputSearch.addEventListener('change', searchPriorty)
btnOrderbyDate.addEventListener('click', orderDate)



//id
let idTask;

function setColor() {
    const inputColor = document.querySelector('#color').value
    const boardData = document.querySelector('#boardData')
    const editIcon = document.querySelectorAll('.edit')

    if (tinycolor(`${inputColor}`).isDark()) {
        boardData.style.backgroundColor = inputColor
        boardData.style.color = 'white';

        for (let i = 0; i < editIcon.length; i++) {
            editIcon[i].style.color = 'yellow';
        }

    } else {
        boardData.style.backgroundColor = inputColor
        boardData.style.color = 'black';

        for (let i = 0; i < editIcon.length; i++) {
            editIcon[i].style.color = 'rgb(244,202,22) ';
        }

    }
}

//filterTask
async function searchPriorty(ev) {

    try {
        ev.preventDefault()

        const inputSearch = document.querySelector('#filterstatus').value
        const allTask = await searchPriortyPromise(inputSearch)
        if (allTask.length === 0) throw new Error(`No task ${inputSearch}  on the database`)
        renderTask(allTask)
    } catch (e) {
        alert(e)
    }
}



function openModal(ev) {
    try {
        ev.preventDefault()

        addTask.disabled = false;
        editTask.disabled = true;
        addTask.style.cursor = 'pointer';
        editTask.style.cursor = 'not-allowed';

        bgModal.classList.add('bg-active')

    } catch (er) {
        console.error(er);
    }
}

function closeModal() {
    bgModal.classList.remove('bg-active')
}

async function handleSumbit(ev) {
    try {
        ev.preventDefault()

        const newTask = getDataFromDOM()

        bgModal.classList.remove('bg-active')
        const response = await addTaskPromise(newTask)

        const {ok, task} = response
        alert(ok)
        renderTask(task)

    } catch (e) {
        console.log(e)
    }
}



async function getAllTask(ev) {

    try {
        ev.preventDefault()
        const response = await axios.get('/getAllTask')
        const allTask = response.data
        if (allTask.length === 0) throw new Error('No task on the database')
        renderTask(allTask)
    } catch (e) {
        alert(e)
    }
}

async function orderDate(ev) {

    try {
        ev.preventDefault()
        const response = await axios.get('/orderDate')
        const orderAllTask = response.data
        if (orderAllTask.length === 0) throw new Error('No task on the database')
        renderTask(orderAllTask)
    } catch (e) {
        alert(e)
    }
}

async function deleteTask(id) {
    if (confirm("Do you want to delete this task?")) {
        alert('Delete task')
        const response = await axios.delete(`/deleteTask/${id}`)
        const task = response.data
        renderTask(task)
    } else {
        alert('Delete Cancelled!')
    }
}

async function doneTask(id) {
    try {
        const allTask = await getDoneTaskPromise(id)
        renderTask(allTask)
    } catch (e) {
        alert(e)
    }
}

async function getTaskToUpdate(id) {
    try {
        bgModal.classList.add('bg-active')
        addTask.disabled = true;
        editTask.disabled = false;
        addTask.style.backgroundColor = 'red';
        addTask.style.cursor = 'not-allowed';
        editTask.style.cursor = 'pointer';
        const getTask = await getTaskPromise(id)
        const inputTitle = document.querySelector("#title")
        const inputDescription = document.querySelector("#description")
        inputTitle.value = getTask.title
        inputDescription.value = getTask.description

        idTask = id;

    } catch (e) {
        alert(e)
    }
}

async function updateTaskOnDOM(ev) {

    ev.preventDefault()

    const updateTask = getDataFromDOM()

    const updateTaskOnDom = await updateTaskPromise(idTask, updateTask)
    bgModal.classList.remove('bg-active')
    renderTask(updateTaskOnDom)

}

function getDataFromDOM() {

  
        const inputTitle = document.querySelector('#title').value
        const inputDescription = document.querySelector('#description').value
        let inputDateTime = document.querySelector('#datetime').value
        const inputEmoji = document.querySelector('input[name="choice"]:checked').value
        const inputStatus = document.querySelector('#status').value

        const date = inputDateTime.substring(0, inputDateTime.indexOf('T'))
        const min = inputDateTime.substring(inputDateTime.indexOf('T') + 1, inputDateTime.length)

        const Task = {
            title: inputTitle,
            description: inputDescription,
            date: date,
            min: min,
            emoji: inputEmoji,
            status: inputStatus,
            datetime:inputDateTime,

        }
        
        return Task
 
 
}



function renderTask(allTask) {
    try {
        let html = '';
        const boardDataRoot = document.querySelector('#boardData')
        if (!boardDataRoot) throw new Error("This page cant render");

        allTask.forEach(task => {

            //const { id, name, age, avgrade } = elem

            if (task.status === 'important') {
                html += `<div class = "boardData--item boardData--red">`

            } else if (task.status === 'later') {
                html += `<div class = "boardData--item boardData--yellow">`
            } else {
                html += `<div class = "boardData--item boardData--green">`

            }
            html += `<span>${task.emoji}</span>
                    <table id="data">
                           <th>Title: </th>
                           <td>${task.title.charAt(0).toUpperCase() + task.title.slice(1)}</td>
                        </tr>
                        <tr>   
                           <th>Description: </th>
                           <td>${task.description.charAt(0).toUpperCase() + task.description.slice(1)} </td>
                        </tr>
                        <tr>
                           <th>Date: </th>
                           <td>${task.date} </td>
                         </tr>
                         <tr>  
                           <th>Time: </th>
                           <td>${task.min} </td>
                         </tr>
                         <tr>
                         <th>Priority: </th>
                         <td>${task.status.charAt(0).toUpperCase() + task.status.slice(1)}</td>
                       </tr>
                    </table>    
                <div class="boardData--item--icons">
                        <i class="fa fa-trash boardData--item--icons--delete" onclick='deleteTask("${task.id}")' title="Delete Item"></i>
                        <i class="fas fa-edit boardData--item--icons--edit" onclick='getTaskToUpdate("${task.id}")' title="Edit Task"></i>`

            if (task.status !== 'done') {
                html += `<i class="fas fa-check-circle boardData--item--icons--done" onclick='doneTask("${task.id}")' title="Done Task"></i>`
            } else {
                //class iconoos mover a la derecha
            }
            html += `
                    </div>  
                  
                </div>`

            title = "Click on the edit item and then edit"

        });
        boardDataRoot.innerHTML = html

    } catch (e) {
        alert(e)
    }
}

