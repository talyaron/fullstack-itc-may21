const express = require('express');
app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const Ajv = require("ajv");
const ajv = new Ajv()


app.use(express.static('public'));


class toDOItems {

    constructor(item, status) {
        this.item = item;
        this.itemID = Math.random().toString(16).slice(2);
        this.status = status
    }
}

class toDoList {

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
               
                status: {
                    type: "string"
                }
            },
            required: ["task", "status"],
            additionalProperties: false
        }
        const validate = ajv.compile(schema)


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
        
        list.addListItem(new toDOItems(body.task, body.status));
        res.send(list);
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }

})


app.delete('/deleteTask/:ID', (req, res) => {
    const ID = req.params.ID
        list.list = list.list.filter(list => list.itemID !== ID);
        res.send(list)
})

app.put('/updateTask', (req, res) => {

    const { id, newTaskName } = req.body;
    const listIndex = list.list.findIndex(list => list.itemID === id);
    if (listIndex > -1) {
        list.list[listIndex].item = newTaskName;
        res.send({ message: 'one list Item was updated', list })
    } else {
        res.send({ message: 'couldnt find the task Item!', list })
    }

})

app.put('/updateStatus', (req, res) => {
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