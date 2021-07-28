// create a list of your favorite list (books, friends...);
// Create a route for add an item
// create a route for showing all items (method: GET) *
// create a route for deleting an item (method: DELETE) *
// create a route for updating an item (method: PUT) *
// create a route to search items by name. id etc,  (method: GET) *

const fs = require('fs')
const express = require('express')
const {
    v4: uuidv4
} = require('uuid')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json())

const readFriends = () => {
    const allFriends = fs.readFileSync('./hobbies.json')
    return JSON.parse(allFriends)
}

//Read the whole array:
app.get('/', (req, res) => {
    const allFriends = readFriends()
    res.send(allFriends)
});

//Post 
app.post('/', (req, res) => {
    const friend = req.body.friend

    const FriendHobby = {
        friend: friend,
        id: uuidv4()
    }
    const allFriends = readFriends()
    allFriends.push(newFriend)
    fs.writeFileSync('./friends.json', JSON.stringify(allFriends))


    res.send(allFriends)
    console.log(body)
})

// Delete
app.delete('/:id', (req, res) => {
    req.params 
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})