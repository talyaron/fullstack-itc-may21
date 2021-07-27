const express = require('express')
const app = express()
const port = process.env.port || 8080
const path = require('path')
const fs = require('fs')


app.use(express.static('public'));


let avengerList = []
let avengerList2 = []

app.use(express.json())

//Create a route for add an item
app.post('/addAvenger', (req, res) => {
    try {
       
        avengerList = readJson()
        avengerList2 = readJson()
        const { body } = req
        const { name, id } = body
        if (!name || !id) { throw new Error('Dont have name or id in the json object') }
        const isFound = avengerList.some(avenger => avenger.id === id)
        if (isFound) { throw new Error('This id is already in the list') }
        avengerList.push(body)
        avengerList2.push(body)
        fs.writeFileSync('./avenger.json', JSON.stringify(avengerList))
        res.send(avengerList)


    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }

})

//create a route for showing all items 
app.get('/getAvengers', (req, res) => {
    avengerList = readJson()
    avengerList2 = readJson()
    res.send(avengerList)
})

//create a route for deleting an item
app.delete('/deleteAvenger', (req, res) => {
    try {
        avengerList = readJson()
        const { body } = req
        const { id } = body
        if (!id) throw new Error('The id does not exist in the list')
        const indexAvenger = avengerList.findIndex(avenger => avenger.id === id)
        avengerList.splice(indexAvenger, 1)
        avengerList2.splice(indexAvenger,1)
        fs.writeFileSync('./avenger.json', JSON.stringify(avengerList))
        res.send(avengerList)
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
})

//create a route for updating an item
app.put('/updateAvenger', (req, res) => {
    try {
        avengerList = readJson()
        const { body } = req
        const { id, name } = body
        if (!id || !name) throw new Error('The id or name does not exist in the list')
        const index = avengerList.findIndex(item => item.id === id)
        avengerList[index].name = name
        avengerList2[index].name = name
        fs.writeFileSync('./avenger.json', JSON.stringify(avengerList))
        res.send(avengerList)
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
})


//create a route to search items by name. id
app.get('/getAvengersbyName', (req, res) => {

    try {
        
        const regrExp = `${req.query.name}`
        const searchTermReg = new RegExp(regrExp, 'i');
        avengerList = readJson()
        avengerList2 = readJson()
        avengerList = avengerList2.filter(avenger => searchTermReg.test(avenger.name))
        res.send(avengerList)
        
    } catch (e) {
        res.status(500).send({ error: `${e}` });
    }
})



app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function readJson(){
    const file = fs.readFileSync('./avenger.json')
   return JSON.parse(file)
}