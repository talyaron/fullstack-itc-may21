const express = require('express');
app = express();  //YS: CONST app!!!!!!  
const port = process.env.PORT || 5000;
app.use(express.json());
const Ajv = require("ajv");
const ajv = new Ajv()


app.use(express.static('public'));


class toDOItems { //YS: Class names are capitalized

    constructor(item, dueDate) {
        this.item = item;
        this.itemID = Math.random().toString(16).slice(2);
        this.dueDate = dueDate
        this.status = "Incomplete"
    }
}

class toDoList { //YS: Class names are capitalized

    constructor() {
        this.list = [];
    }


    addListItem(list) {
        try {
            this.list.push(list);

        } catch (e) {
            console.error(e)
        }
    }
    
}
const list = new toDoList()

app.post('/addListItem', (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                task: {
                    type: "string"
                },
                dueDate: {
                    type: "string",
                    pattern: "^[1-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]$"
                }
            },
            required: ["task", "dueDate"],
            additionalProperties: false
        }
        const validate = ajv.compile(schema) //YS: Nice


        const {
            body
        } = req;

        const valid = validate(body) 
        if (!valid) {
            validate.errors.forEach(err =>
                console.log(err.message)
            )
            throw new Error("Invalid data was transferd")
        }
        
        list.addListItem(new toDOItems(body.task, body.dueDate));
        res.send(list);
    } catch (e) {
        console.log(e)
        res.status(400).send({  //YS: Very good. 
            error: e.message
        });
    }

})


app.delete('/deleteTask/:ID', (req, res) => {
    const { ID } = req.params
        list.list = list.list.filter(list => list.itemID !== ID); //YS: Would be better if this were a new variable instead of list.list: const deletedList = list.list.filter(list => list.item....)
        res.send(list)
})

app.put('/updateTask', (req, res) => {

    const { id, newTaskName } = req.body; //YS: Id should be sent through params and not body.  app.put('/updateTask/:taskId', (req, res) => {...
    const listIndex = list.list.findIndex(list => list.itemID === id);
    if (listIndex > -1) {
        list.list[listIndex].item = newTaskName;
        res.send({ message: 'one list Item was updated', list })
    } else {
        res.send({ message: 'couldnt find the task Item!', list }) //YS: res.status(400)
    }

})

app.put('/updateStatus', (req, res) => {   //YS: Id should be sent through params and not body.  app.put('/updateStatus/:statusId', (req, res) => {...
    const { id } = req.body; 
    const listIndex = list.list.findIndex(list => list.itemID === id);
    if (listIndex > -1) {
        list.list[listIndex].status = "Completed!";
        res.send({ message: 'one list task status was updated', list })
    } else {
        res.send({ message: 'couldnt find the task Item!', list })
    }

})

app.get('/getList', (req, res) => {
    try {
        res.send(
            list
        )
    } catch (e) {
        console.error(e)
    }
})

app.listen(port, () => {
    console.log('Server listen on port', port)
})