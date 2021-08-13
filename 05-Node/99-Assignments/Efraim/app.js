const express = require('express');
app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const Ajv = require("ajv");
const ajv = new Ajv()


app.use(express.static('public'));


class toDOItems {

    constructor(item, itemID, status) {
        this.item = item;
        this.itemID = itemID
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
    renderArrayToDom(listArray) { 
        try {
            let html = ''
           
            listArray.forEach((listItem) => {
                html += (
                    `<div class="holder__item" id="${listItem.itemId}">` +
                    `<div class="holder__item__task">${listItem.item}</div>` +
                    `<div class="holder__item__ID">${listItem.itemID}</div>` +
                    `<div class="holder__item__status">${status}</div>` +
                    `<div class="holder__item__delete" onclick="deleteitem('${listItem.itemId}')">x</div>` +
                    `</div>`
                )})
            
        } catch (e) {
            console.error(e)
        }
    }
    findListItemWithID(listItemID) {
        try {
            const searchedList = this.list.filter(list => list.itemID === parseInt(listItemID));


            html =
                `<div class="holder__student" id="${searchedList[0].itemID}">
                <div class="holder__student__id">Student ID: ${searchedList[0].itemID}</div>
                <div class="holder__student__item">Student item: ${searchedList[0].item}</div>
                <div class="holder__student__age"> Student Age: ${searchedList[0].age}</div>
                <div class="holder__student__status"> Average Grade: ${searchedList[0].status}%</div>
                </div>`;

            return html;

        } catch (e) {
            console.error(e)
        }
    }


}
const list = new toDoList()
let html = ''

app.put('/addListItem', (req, res) => {

    try {

        const schema = {
            type: "object",
            properties: {
                item: {
                    type: "string"
                },
                itemID: {
                    type: "integer"
                },
                status: {
                    type: "string"
                }
            },
            required: ["item", "itemID", "status"],
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
        
        list.addListItem(new toDOItems(body.item, body.itemID, body.status));
        list.renderArrayToDom(list)
        res.send(list);
    } catch (e) {
        console.log(e)
        res.status(400).send({
            error: e.message
        });
    }

})

app.get('/getListQuery', (req, res) => {
    try {
        const searchedID = req.query.id;
        const list = list.findListItemWithID(searchedID)
        res.send(list)
    } catch (e) {
        console.error(e)
    }
})



app.get('/getListItem', (req, res) => {
    try {
        res.send({
            html
        })
    } catch (e) {
        console.error(e)
    }
})



app.listen(port, () => {
    console.log('Server listen on port', port)
})