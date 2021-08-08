
// For YS, I orginally used axios and the code was way shorter and cleaner.. 
// assignment said to use promises so I changed it all to fetch and resolve and reject and seems a lot bulkier now..

// YS: Its good to use axios with async/await (or without async/await) - next time ask me, I would've said no problem. Although you did a great job using promises too. 
function getFullTaskList(){
    try {
        return new Promise((resolve, reject) => { //YS: You can also use async/await with promises (instead of the .thens) - I think its much cleaner and DRY. 
            fetch('/getList')
                .then(r => r.json())
                .then(data => {
                    resolve(data.list)
                })
                .catch(e => {
                    reject(e)
                });
        })
    } catch (e) {
        console.error(e)
    }
}
window.addEventListener('load', async() => {
    try {
       const list = await getFullTaskList();
       await renderArrayToDom(list)      
    } catch (e) {
        console.error(e)
    }
})


function handleTask(ev) {  //YS: Good
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

function deleteTask(taskID) {  //YS: Good
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
        const newTaskName = document.getElementById(`${taskID}update`).value; //YS: Nice 
        return new Promise(async(resolve, reject) => {
            fetch('/updateTask', { //YS: Id should go here. 
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
                    resolve(data.list.list) //YS: Destrucutre this object
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

function updateStatus(ID) {
    try {
        return new Promise((resolve, reject) => {
            fetch('/updateStatus', { //YS: /:id
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
async function editTaskKeepText(id){  //YS: Nice
    try{
        const edit = document.getElementById(`${id}update`);
        const list = await getFullTaskList()
        const arrayElement = await list.filter(find => find.itemID === id)
        edit.placeholder = ""
        edit.value = arrayElement[0].item
} catch (e) {
    console.error(e)
}
}
function dateUrgency(date) { //YS: Nice
    try{
    if ((new Date(date) - new Date()) / 1000 < 86400) {
        return "red"
    } else if ((new Date(date) - new Date()) / 1000 < 259200) {
        return "orange"
    }else if((new Date(date) - new Date()) / 1000 < 604800) {
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
            return new Date(a.dueDate) - new Date(b.dueDate); //YS: Good
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