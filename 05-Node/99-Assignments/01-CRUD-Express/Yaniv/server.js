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
            this.toDoList({
                ...toDo,
                uuid: uuidv4(),
                dateCreated: new Date()
            });

        } catch (error) {
            console.error(error);
        }
    }

    searchToDos(toDoContent,toDoStatus) {
        try {
            let searchedToDos = this.toDoList;
            if (toDoContent !== '') this.toDoList.findIndex(toDo => toDo.content === toDoContent);
            if (toDoStatus !== '') this.toDoList.findIndex(toDo => toDo.content === toDoStatus);

            return searchedToDos;

        } catch (error) {
            console.error(error);
        }
    }

    updateToDo(toDoUuid, toDo) {
        try {
            const toDoToUpdateIndex = this.toDoList.findIndex(toDoItem => toDoItem.uuid === toDoUuid);
        
            if (toDoToUpdateIndex === -1) return [];
    
            if (toDo.content !== '') this.toDoList.findIndex(toDoItem => toDoItem.content === toDo.content);
            if (toDo.status !== '') this.toDoList.findIndex(toDoItem => toDoItem.content === toDo.status);
            if (toDo.dueDate !== '') this.toDoList.findIndex(toDoItem => toDoItem.uuid === toDo.dueDate);
    
            this.updateToDosJson();
            return [this.toDoList[toDoToUpdateIndex]];
    
        } catch (error) {
            console.error(error);
        }
    }

    deleteToDo(toDoUuid) {
        try {
            const toDoToUpdateIndex = this.toDoList.findIndex(toDo => toDo.uuid === toDoUuid);

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
        console.error(er);
        res.status(400).send({error: er.message});
    }
});

app.post('/post-todo', (req, res) => {
    try {
        const {
            body
        } = req;
        toDos.addToDo(body);

        console.log(`${body.name} added to to-do list!`);
        res.send(toDos);

    } catch (er) {
        console.error(er);
        res.status(400).send({error: er.message});
    }
});

app.get('/todo?content=:content&status=:status', (req, res) => { // can search by content or status.
    try {
        const {
            content,
            status
        } = req.query;

        const searchedToDos = toDos.searchToDos(content,status);

        const resToSent = (searchedToDos.length === 0) ? `No to-dos found` : searchedToDos; 
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