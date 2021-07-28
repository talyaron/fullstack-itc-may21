const { randomUUID } = require('crypto');
const express = require('express')
const app = express() //app is using express
app.use(express.json())

const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

const port = 3000;

//helpers
const readAllUsers = () => {
    const allUsers = fs.readFileSync('./user.json');  //async     
    return JSON.parse(allUsers); //original form
}

//Read Data
app.get('/', (req, res) => {
    const allUsers = readAllUsers()
    res.send(allUsers)
})


app.post('/', (req, res) => {

    const { name } = req.body; //requested from the client

    const newUser = {
        name: name,
        id: uuidv4()
    }

    const allUsers = readAllUsers();
    allUsers.push(newUser);
    fs.writeFileSync('./user.json', JSON.stringify(allUsers))
    res.send(allUsers)

})

app.delete('/:id', (req, res) => { //parametro id /users/:id/:firstname

    //http://localhost:3000/123  123 is param
    const { id } = req.params
    const allUsers = readAllUsers()
    const userIndex = allUsers.findIndex(user => user.id === id)
    allUsers.splice(userIndex, 1)
    fs.writeFileSync('./user.json', JSON.stringify(allUsers))
    res.send('User Deleted')
})

app.put('/:id', (req, res) => {

    const { id } = req.params
    const { name } = req.body
    const allUsers = readAllUsers()
    const nameUser = allUsers.find(user => user.id === id)
    nameUser.name = name
    fs.writeFileSync('./user.json', JSON.stringify(allUsers))
    res.send('User name updated')
})



app.listen(port, () => { console.log(`App is listening on http://localhost/${port}`) })