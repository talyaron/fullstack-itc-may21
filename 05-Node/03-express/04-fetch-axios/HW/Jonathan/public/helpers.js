function addStudentPromise(newStudent) {
    return new Promise((resolve, reject) => {
        fetch('/addStudent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        }).then(function (res) {
                if (res.status === 200 && res.ok) {
                    return res.json().then(student => { alert(student.ok) });
                } else {
                    return res.json().then(student => { alert(student.error) })
                }
            })
    })
}



function deleteStudentPromise(id) {
    return new Promise((resolve, reject) => {
        fetch(`/deleteStudent/${id}`, {
            method: 'DELETE'
        })
            .then(r => r.json())
            .then(student => { resolve(student) })
            .catch(e => {
                reject(e)
            })
    })
}

function getOneStudent(howGetStudent) {
    const id = inputSearchStudenbyID.value
    const route = (howGetStudent === 'query') ? `/getStudentbyQuery?id=${id}` : `/getStudentbyParam/${id}`
    return new Promise((resolve, reject) => {
        fetch(route)
            .then(function (res) {
                if (res.status === 200 && res.ok) {
                    return res.json().then(student => { resolve(student) })
                } else {
                    return res.json().then(student => { alert(student.error) })
                }
            })

            .catch(e => {
                reject(e)
            })
    })

}



function getAllStudentsPromise() {
    return new Promise((resolve, reject) => {
        fetch('/getAllStudents')
            .then(r => r.json())
            .then(student => { resolve(student) })
            .catch(e => {
                reject(e)
            })
    })
}
