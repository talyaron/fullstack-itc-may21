function addTaskPromise(newTask) {
    return new Promise((resolve, reject) => {
        fetch('/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        }).then(function (res) {
                if (res.status === 200 && res.ok) {
                    return res.json().then(task => { resolve(task) });
                } else {
                    return res.json().then(task => { alert(task.error) })
                }
            })
    })
}



function getTaskPromise(id) {
    return new Promise((resolve, reject) => {
        fetch(`/getTask/${id}`)
            .then(r => r.json())
            .then(task => { resolve(task) })
            .catch(e => {
                reject(e)
            })
    })
}



function getDoneTaskPromise(id) {
    return new Promise((resolve, reject) => {
        fetch(`/doneTask/${id}`, {
            method: 'PUT',
        })
            .then(r => r.json())
            .then(task => { resolve(task) })
            .catch(e => {
                reject(e)
            })
    })
}

function updateTaskPromise(id,updateTask) {
    return new Promise((resolve, reject) => {
        fetch(`/updateTask/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
        .then(function (res) {
            if (res.status === 200 && res.ok) {
                return res.json().then(task => { resolve(task) });
            } else {
                return res.json().then(task => { alert(task.error) })
            }
        })
            .catch(e => {
                reject(e)
            })
    })
}

function searchPriortyPromise(status) {
    return new Promise((resolve, reject) => {
        fetch(`/getPriority/${status}`)
            .then(r => r.json())
            .then(task => { resolve(task) })
            .catch(e => {
                reject(e)
            })
    })
}

