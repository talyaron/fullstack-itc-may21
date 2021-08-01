function getStudents() {
    return new Promise(function (resolve, reject) {
        axios.get("/all-students")
            .then(function (students) {
            resolve(students);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
function getStudent(searchType, studentUuid) {
    var route = (searchType === 'query') ? "/student?uuid=" + studentUuid : "/student/" + studentUuid;
    return new Promise(function (resolve, reject) {
        axios.get(route)
            .then(function (student) {
            console.log(student);
            resolve(student);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
function postStudent(student) {
    return new Promise(function (resolve, reject) {
        axios.post("/add-student", student)
            .then(function (student) {
            resolve(student);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
