const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const friendsJson = require('./friends');

// PUSHING DEFAULT FRIEND OF OUR LIST
let friends = [];
friends.push(friendsJson); //YS: What is this for? 

console.log(friends) //YS: ?
// INITIALIZE BODYPARSER
app.use(bodyParser.json()); ///YS: Instead of this use: app.use(express.json())

// INDEX
app.get('/', (req, res) =>{ //YS: You dont really need this. 
    res.send('Hello World');
})

// GET ALL FRIENDS
app.get('/getFriends', (req, res)=>{
    res.send({friends});
})

// ADD A FRIEND WITH A NAME AND AGE
app.post('/postFriends', (req, res)=>{
    const friend = req.body;
    friends.push({...friend, id: uuidv4()});
    res.send({friends});
    console.log(`You had add a friend`) //YS: IF you want your user to know this, then you should send it in the app.send(`You had add a friend`) instead of console.logging 
})

// SEARCH FRIEND BY NAME 
app.get('/searchFriend/:name', (req, res)=>{   //YS: This should be by ID instead of name: searchFriend/:id
    const {name} = req.params;
    const searchedFriend = friends.filter((friend)=>friend.name === name);
    res.send({searchedFriend})
    console.log(`You have search to your friend: ${name}`) //YS: Same as before, console.logging wont do much. 
})

// DELETE FRIEND BY NAME 
app.delete('/deleteFriends/:name', (req, res)=>{ //YS: Same as before, by ID
    const {name} = req.params;
    const deleteFriend = friends.filter((friend)=>friend.name !== name);
    friends = deleteFriend;
    res.send({friends})
    console.log(`The friend ${name} has been deleted`)
})

// UPDATE FRIEND NAME AND AGE BY ID
app.put('/updateFriends/:id', (req, res)=>{   //YS: Nice
    const {id} = req.params;
    const {name, age} = req.body;
    const friendUpdate = friends.find((friend)=>friend.id === id);
    if(name) friendUpdate.name = name;
    if(age) friendUpdate.age = age;

    res.send(friends)
})

app.listen(port, ()=> {console.log(`Running on server ${port}`)});

// create a list of your favorite list (books, friends...); -> LISTO
// Create a route for add an item -> LISTO
// create a route for showing all items (method: GET) -> LISTO
// create a route for deleting an item (method: DELETE) -> LISTO
// create a route for updating an item (method: PUT)
// create a route to search items by name. id etc,  (method: GET) ->LISTO