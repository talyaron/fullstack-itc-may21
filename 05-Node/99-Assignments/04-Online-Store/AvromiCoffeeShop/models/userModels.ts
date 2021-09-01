const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');

const path = require('path');
const filePath = path.join(__dirname, 'users.json')

class User{
    fname: string;
    lname: string;
    company: string;
    role: string;
    email: string;
    password: string;
    cart: [];
    purchased = [];
    id: string;
    constructor(fname: string, lname: string, company: string, email: string, password: string){
        this.fname = fname;
        this.lname = lname;
        this.company = company;
        this.role = "public";
        this.email = email;
        this.password = password;
        this.cart = []
        this.purchased = []
        this.id = uuidv4()

    }
}



function getAllUsers() {
    try {
        const allUsers = fs.readFileSync(filePath);
        const parsedUsers = JSON.parse(allUsers)
        return parsedUsers
    } catch (error) {
        console.log(error);
    }
}


function addUser(fname, lname, company, email, password) {
    try {
        const allUsers = getAllUsers();
      const newUser = new User(fname, lname, company, email, password)

        allUsers.push(newUser);

        fs.writeFileSync(filePath, JSON.stringify(allUsers));
        return newUser
    } catch (error) {
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




exports.getAllUsers = getAllUsers
exports.addUser = addUser
// exports.deleteTask = deleteTask
// exports.editTask = editTask