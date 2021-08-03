window.addEventListener('load', () => {
    try {
        return new Promise((resolve, reject) => {
            axios.get('/getList')
                .then(data => {
                    resolve(data.data.list)
                    renderArrayToDom(data.data.list)
                })
                .catch(e => {
                    reject(e)
                });
        })
    } catch (e) {
        console.error(e)
    }
})


function handleTask(ev) {
    ev.preventDefault();
    try {
        let {
            task,
            status
        } = ev.target.elements;
        task = task.value;

        status = "Incomplete";
        return new Promise((resolve, reject) => {
            axios.post('/addListItem', {
                    task,
                    status
                })
                .then(data => {
                    resolve(data.data.list)
                    renderArrayToDom(data.data.list)
                    alert("Submitted Succesfuly!")
                })
                .catch(e => {
                    reject(e)
                });

            ev.target.reset();
        })
    } catch (e) {
        console.error(e)
    }
}
const form = document.querySelector("form")
form.addEventListener("submit", handleTask)

function deleteTask(taskID) {
    try {
        return new Promise((resolve, reject) => {
            axios.delete(`/deleteTask/${taskID}`)
                .then(data => {
                    resolve(data.data.list)
                    renderArrayToDom(data.data.list)
                })
                .catch(e => {
                    reject(e)
                });
        })
    } catch (e) {
        console.error(e)
    }
}


function updateTask(taskID) {
    try {
        const newTaskName = document.getElementById(`${taskID}update`).value;
        return new Promise((resolve, reject) => {
            axios.put('/updateTask', {
                    id: taskID,
                    newTaskName: newTaskName
                })
                .then(data => {
                    resolve(data.data.list.list)
                    renderArrayToDom(data.data.list.list)
                    alert("updated succefully!")
                })
                .catch(e => {
                    reject(e)
                });
        })
    } catch (e) {
        console.error(e)
    }
}

function updateStatus(ID) {
    try {
        return new Promise((resolve, reject) => {
            axios.put('/updateStatus', {
                    id: ID
                })
                .then(data => {
                    resolve(data.data.list.list)
                    renderArrayToDom(data.data.list.list)
                })
                .catch(e => {
                    reject(e)
                });
        })
    } catch (e) {
        console.error(e)
    }
}


function renderArrayToDom(listArray) {
    try {
        const list = document.querySelector(".holder")
        let html = ''

        listArray.forEach((listItem) => {
            if (listItem.status === "Incomplete") {

                html += (
                    `<div class="holder__item" id='${listItem.itemID}'>
                <div class="holder__item__header">Task:</div>
                <div class="holder__item__taskDisplay">${listItem.item}</div>
                <input class="holder__item__task" id="${listItem.itemID}update" placeholder="Edit Task, Click Update!"  value="">
                <div class='button button--update' onclick='updateTask("${listItem.itemID}")'>UPDATE</div>
                <div class="holder__item__header">Status:</div>
                <div class="holder__item__status" id="${listItem.itemID}status">${listItem.status}</div>
                <div class='button button--update-status' id="${listItem.itemID}status-button" onclick='updateStatus("${listItem.itemID}")'>Mark as Complete!</div>
                <div class="button button--delete" onclick='deleteTask("${listItem.itemID}")'>DELETE</div>
                </div>`
                )
            } else {
                html += (
                    `<div class="holder__item" id='${listItem.itemID}'>
                    <div class="holder__item__header">Task:</div>
                    <div class="holder__item__taskDisplay">${listItem.item}</div>
                    <input class="holder__item__task" id="${listItem.itemID}update" placeholder="Edit Task, Click Update!" value="">
                    <div class='button button--update' onclick='updateTask("${listItem.itemID}")'>UPDATE</div>
                    <div class="holder__item__header">Status:</div>
                    <div class="green" id="${listItem.itemID}status">${listItem.status}</div>
                    <div class="button button--delete" onclick='deleteTask("${listItem.itemID}")'>DELETE</div>
                    </div>`
                )
            }
        })
        list.innerHTML = html

    } catch (e) {
        console.error(e)
    }
}