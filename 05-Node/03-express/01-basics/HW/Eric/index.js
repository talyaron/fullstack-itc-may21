// create a list of your favorite list (books,uits);
// Create a route for add an item
// create a route for showing all items (method: GET)
// create a route for deleting an item (method: DELETE)
// create a route for updating an item (method: PUT)
// create a route to search items by name. id etc,  (method: GET)

let fruits = []

const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/getFruits',(req,res)=>{
    res.send({fruits})
})

app.post('/addFruits', (req, res) => {

        const { body } = req;
        const { name, id } = body;
        fruits.push(body);
        res.send(body);
})

//searh by bame
app.get('/searchFruit/:name', (req, res)=>{
    const {name} = req.params;
    const searchFruit = fruits.filter((fruit)=>fruit.name === name);
    res.send({searchFruit})
    console.log(`You have search to your friend: ${name}`)
})


app.put('/updateFruits/:id', (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const fruitUpdate = fruits.find((fruit)=>fruit.id === id);
    if(name) fruitUpdate.name = name;

    res.send(fruits)
})

// app.delete('/deleteFruits/:id', (req, res)=>{
//     const { body } = req.params;
//     const {id} = body;
//     fruits = fruits.filter((fruit)=>fruit.id !== id);
//     res.send({fruits})
//     console.log(`The fruit ${id} has been deleted`)
// })

app.delete('/deleteFruits/:name', (req, res)=>{
    const {name} = req.params;
    const deleteFruit = fruits.filter((fruit)=>fruit.name !== name);
    fruits = deleteFruit;
    res.send({fruits})
    console.log(`The friend ${name} has been deleted`)
})


app.listen(port, () => {
    console.log(`crud listening at http://localhost:${port}`)
  })