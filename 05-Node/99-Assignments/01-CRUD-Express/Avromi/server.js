const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static('public'))
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

class Task {
    constructor(title){
        this.title = title;
        this.id = uuidv4();
    }
}

const tasks= [];

app.post('/newTask', (req, res)=>{
    console.log(req.bosy);
    const title = req.body.title;
    const task = new Task(title)
    res.send(
        task
    )
})






app.listen(port,()=>{
    console.log(`App Listening on port: ${port}`);
})