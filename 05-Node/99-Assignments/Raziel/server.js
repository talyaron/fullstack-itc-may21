const express = require('express');
const app = express();
const port= process.env.const || 3500;
const fs = require("fs");
const {v4: uuidv4}=require("uuid");
const path = require("path");
const filepath= path.resolve(__dirname,"EntryList.json");
app.use(express.static("public"));
app.use(express.json());

const readAllEntery=() => {
    const allEntery = fs.readFileSync(filepath);
    console.log(allEntery);
    return JSON.parse(allEntery);
}

const allEntery = fs.readFileSync(filepath);
console.log(allEntery);


app.post('/addExpense',(req, res) => {
    try {
        const {type, title,amount} = req.body;
        
    const newExpense={
        type,
        title,
        amount,
        id:uuidv4()
    }
    console.log(newExpense);
    const allEntery=readAllEntery();
    allEntery.push(newExpense);
    console.log(allEntery);
    fs.writeFileSync("./EntryList.json",JSON.stringify(allEntery));
    res.send(allEntery)
    } catch (error) {
        res.status(500).send(error.message);
    }
    

})

app.post('/addIncome',(req,res) => {
    try {
        const {type, title,amount} = req.body;
        
    const newExpense={
        type,
        title,
        amount,
        id:uuidv4()
    }
    console.log(newExpense);
    const allEntery=readAllEntery();
    allEntery.push(newExpense);
    console.log(allEntery);
    fs.writeFileSync("./EntryList.json",JSON.stringify(allEntery));
    res.send(allEntery)
    } catch (error) {
        res.status(500).send(error.message);
    }
})
 

app.get('/getEntery', (req, res) => {
    try {
        const allEntery = readAllEntery();
        res.send(allEntery);
    } catch (error) {
        console.error(error);
    }
});




app.delete('/deleteEntry/:id',(req,res) => {
    const {id}= req.params;
    let allEntery=readAllEntery();
    allEntery=allEntery.filter(entery =>entery.id !== id);
    fs.writeFileSync("./EntryList.json",JSON.stringify(allEntery));
    res.send(allEntery);
})
app.listen(port, () => { console.log('Server listen on port', port) })