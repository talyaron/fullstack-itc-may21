var fs = require('fs');
var uuidv4 = require('uuid').v4;
var path = require('path');
var filePath = path.join(__dirname, 'users.json');
var User = /** @class */ (function () {
    function User(fname, lname, company, email, password) {
        this.purchased = [];
        this.fname = fname;
        this.lname = lname;
        this.company = company;
        this.role = "public";
        this.email = email;
        this.password = password;
        this.cart = [];
        this.purchased = [];
        this.id = uuidv4();
    }
    return User;
}());
function getAllUsers() {
    try {
        var allUsers = fs.readFileSync(filePath);
        var parsedUsers = JSON.parse(allUsers);
        return parsedUsers;
    }
    catch (error) {
        console.log(error);
    }
}
function addUser(fname, lname, company, email, password) {
    try {
        var allUsers = getAllUsers();
        var newUser = new User(fname, lname, company, email, password);
        allUsers.push(newUser);
        fs.writeFileSync(filePath, JSON.stringify(allUsers));
        return newUser;
    }
    catch (error) {
        console.log(error);
    }
}
// function deleteTask(id) { //YS: Try/Catch
//     const allTasks = getAllTasks();
//     const filteredTasks = allTasks.filter(task => task.id !== id)
//     fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
//     return filteredTasks
// }
// function editTask(id, newTitle) { //YS: Nice
//     console.log("inside model");
//     const allTasks = getAllTasks();
//     const taskToEdit = allTasks.filter(task => task.id === id); //YS: Use find instead of filter to return an object instead of an array
//     taskToEdit[0].title = newTitle;
//     console.log(taskToEdit)
//     fs.writeFileSync(filePath, JSON.stringify(allTasks));
//     return allTasks
// }
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
// exports.deleteTask = deleteTask
// exports.editTask = editTask
