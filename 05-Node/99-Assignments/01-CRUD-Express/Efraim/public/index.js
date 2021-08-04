
// For YS, I orginally used axios and the code was way shorter and cleaner.. 
// assignment said to use promises so I changed it all to fetch and resolve and reject and seems a lot bulkier now..

window.addEventListener('load', () => {
    try {
        return new Promise((resolve, reject) => {
            fetch('/getList')
                .then(r => r.json())
                .then(data => {
                    resolve(data.list)
                    renderArrayToDom(data.list)
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
        let task = ev.target.elements.task.value;
        let dueDate = ev.target.elements.dueDate.value
        return new Promise((resolve, reject) => {
            fetch('/addListItem', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        task,
                        dueDate
                    }),
                })
                .then(r => r.json())
                .then(data => {
                    resolve(data.list)
                    renderArrayToDom(data.list)
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
            fetch(`/deleteTask/${taskID}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(r => r.json())
                .then(data => {
                    resolve(data.list)
                    renderArrayToDom(data.list)
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
            fetch('/updateTask', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: taskID,
                        newTaskName: newTaskName
                    }),
                })
                .then(r => r.json())
                .then(data => {
                    resolve(data.list.list)
                    renderArrayToDom(data.list.list)
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
            fetch('/updateStatus', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: ID
                    }),
                })
                .then(r => r.json())
                .then(data => {
                    resolve(data.list.list)
                    renderArrayToDom(data.list.list)
                })
                .catch(e => {
                    reject(e)
                });
        })
    } catch (e) {
        console.error(e)
    }
}
function editTaskKeepText(id){
    try{
    return new Promise((resolve, reject) => {
    const edit = document.getElementById(`${id}update`);
    fetch('/getList')
    .then(r => r.json())
    .then(data => {
        resolve(data.list)
        const arrayElement = data.list.filter(find => find.itemID === id)
        edit.placeholder = ""
        edit.value = arrayElement[0].item
    })
    .catch(e => {
        reject(e)
    });
})} catch (e) {
    console.error(e)
}
}
function dateUrgency(date) {
    try{
    if ((new Date(date) - new Date()) / 1000 < 86400) {
        return "red"
    } else if ((new Date(date) - new Date()) / 1000 < 259200) {
        return "rgb(220, 220, 2)"
    } else {
        return "blue"
    }} catch (e) {
        console.error(e)
    }
}
async function renderArrayToDom(listArray) {
    try {
        const list = document.querySelector(".holder")
        let html = ''

        await listArray.sort(function (a, b) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });


        await listArray.forEach((listItem) => {
            if (listItem.status === "Incomplete") {

                let urgencyColor = dateUrgency(listItem.dueDate)

                html += (
                    `<div class="holder__item" id='${listItem.itemID}'>
                <div class="holder__item__header">Task:</div>
                <div class="holder__item__taskDisplay">${listItem.item}</div>
                <input class="holder__item__task" id="${listItem.itemID}update" placeholder="Edit Task, Click Update!"  value="" onclick='editTaskKeepText("${listItem.itemID}")'>
                <div class='button button--update' onclick='updateTask("${listItem.itemID}")'>UPDATE</div>
                <div class="holder__item__header">Due Date:</div>
                <div class="holder__item__dueDate" style="color: ${urgencyColor}">${listItem.dueDate}</div>
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
                    <div class="holder__item__taskDisplay" style="color: green">${listItem.item}</div>
                    <div class="holder__item__header">Due Date:</div>
                    <div class="holder__item__dueDate" style="color: green">${listItem.dueDate}</div>
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