const express = require('express');
const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');

app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use(express.static('public'));

const readJson = () => {
    try {
        const toDos = fs.readFileSync('todos.json');
        return JSON.parse(toDos);
    
    } catch (error) {
        console.error(error);
    }
}

class ToDos {
    
    constructor() {
        this.toDoList = readJson();
    }

    updateToDosJson() {
        try {
            fs.writeFileSync('todos.json',JSON.stringify(this.toDoList));

        } catch (error) {
            console.error(error);
        }
    }

    addToDo(toDo) {
        try {
            toDo.uuid = uuidv4();
            toDo.createdDate = new Date(); //YS: Nice
            toDo.editedDate = null;

            this.toDoList.push(toDo);
            
            this.updateToDosJson();

        } catch (error) {
            console.error(error);
        }
    }

    searchToDos(toDoContent,toDoStatus) { //YS: Very nice
        try {
            let searchedToDos = this.toDoList;
            const toDoContentRegEx = new RegExp(toDoContent,'gmi');

            if ((toDoContent === '') && (toDoStatus == '')) {
                return searchedToDos;
            }

            if (toDoContent !== '') {
                searchedToDos = this.toDoList.filter(toDo => toDoContentRegEx.test(toDo.content));
            }
            if (toDoStatus !== '') {
                searchedToDos = this.toDoList.filter(toDo => toDo.status === toDoStatus);
            }

            return searchedToDos;

        } catch (error) {
            console.error(error);
        }
    }

    updateToDo(toDoUuid, toDo) { //YS: Nice! 
        try {
            const toDoToUpdateIndex = this.toDoList.findIndex(toDoItem => toDoItem.uuid === toDoUuid); 
        
            if (toDoToUpdateIndex === -1) return [];
    
            let isEdited = false;

            if ((toDo.content !== '') && (toDo.content !== this.toDoList[toDoToUpdateIndex].content)) {
                this.toDoList[toDoToUpdateIndex].content = toDo.content;
                isEdited = true;
            }
            if ((toDo.status !== '') && (toDo.status !== this.toDoList[toDoToUpdateIndex].status)) {
                this.toDoList[toDoToUpdateIndex].status = toDo.status;
                isEdited = true;
            }
            if ((toDo.dueDate !== '') && (toDo.dueDate !== this.toDoList[toDoToUpdateIndex].dueDate)) {
                this.toDoList[toDoToUpdateIndex].dueDate = toDo.dueDate;
                isEdited = true;
            }
            if (isEdited) this.toDoList[toDoToUpdateIndex].editedDate = new Date(); //YS: Very nice! You can also use Date.now()

            this.updateToDosJson();
            return [this.toDoList[toDoToUpdateIndex]];
    
        } catch (error) {
            console.error(error);
        }
    }

    deleteToDo(toDoUuid) {
        try {
            const toDoToUpdateIndex = this.toDoList.findIndex(toDo => toDo.uuid === toDoUuid); //YS: You and your findIndex... 

            if (toDoToUpdateIndex === -1) return [];
            
            const deletedToDo = this.toDoList.filter(toDo => toDo.uuid === toDoUuid);

            this.toDoList = this.toDoList.filter(toDo => toDo.uuid !== toDoUuid);
    
            this.updateToDosJson();
            return deletedToDo;
    
        } catch (error) {
            console.error(error);
        }
    }
}

const toDos = new ToDos;

app.get('/todo-list', (req, res) => {
    try {
        const resToSent = (toDos.toDoList.length === 0) ? `Your to-do list is empty. Go do something you love 🤩` : toDos.toDoList; 

        res.send(resToSent);

    } catch (error) {
        console.error(error);
        res.status(400).send({error: er.message}); //YS: Very nice
    }
});

app.post('/post-todo', (req, res) => {
    try {
        const { body } = req;
        toDos.addToDo(body);

        console.log(`${body.content} added to to-do list!`);
        res.send(toDos); //YS: You are sending the whole class back? 

    } catch (er) {
        console.error(er);
        res.status(400).send({error: er.message});
    }
});

app.get('/todo', (req, res) => { //YS: Nice
    try {
        const {
            content,
            status
        } = req.query;

        const searchedToDos = toDos.searchToDos(content,status);

        const resToSent = (searchedToDos.length === 0) ? `No to-dos found 👁‍🗨` : searchedToDos; 
        const terminalMsg = (searchedToDos.length === 0) ? `No to-dos found` : `${searchedToDos.length} to-dos found!`;

        console.log(terminalMsg);
        res.send(resToSent);

    } catch (er) {
        console.error(er);
        res.status(400).send({error: er.message});
    }
});

app.put('/todo/:uuid', (req, res)=>{ // can update content, status or dueDate.
    try {
        const { body } = req;
        const { uuid } = req.params;
                
        const updatedToDo = toDos.updateToDo(uuid, body);

        if (updatedToDo.length === 0) throw new Error(`To-do ${uuid} not found`);

        console.log(`To-do ${uuid} updated successfully!`);
        res.send(toDos);

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }

});

app.delete('/todo/:uuid', (req,res) => {
    try {
        const { uuid } = req.params;

        const deletedToDo = toDos.deleteToDo(uuid);

        if (deletedToDo.length === 0) throw new Error(`To-do ${uuid} not found`);

        console.log(`To-do ${uuid} deleted successfully!`);
        res.send(toDos);

    } catch (er) {
        console.error(er);
        res.status(400).send({ error: er.message });
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});