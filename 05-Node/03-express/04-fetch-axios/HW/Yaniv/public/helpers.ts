function getStudents() {
    return new Promise((resolve,reject) => {
        axios.get("/all-students")
        .then(students => {
            resolve(students);
        }).catch((err) => {
            reject(err);
        });
    });
}

function getStudent(searchType, studentUuid) {
    const route: string = (searchType === 'query') ? `/student?uuid=${studentUuid}` : `/student/${studentUuid}`; //YS: Nice! 
    return new Promise((resolve,reject) => {
        axios.get(route)
        .then(student => {
            console.log(student);
            resolve(student);
        }).catch((err) => {
            reject(err);
        });
    });
}

function postStudent(student) {
    return new Promise((resolve,reject) => {
        axios.post("/add-student", student)
        .then(student => {
            console.log(student);
            resolve(student);
        }).catch((err) => {
            reject(err);
        });
    });
}