const express = require('express');
const app = express();
const {v4: uuidv4}=require("uuid");
const port= process.env.const || 3500;
const fs = require("fs");
const path = require("path");
const filepath=path.resolve(__dirname,"transactions.json")
app.use(express.static("public"));
app.use(express.json());


function readTransaction (){
    try {
        const transaction =fs.readFileSync(filepath)
        console.log(transaction)
        return JSON.parse(transaction)
    } catch (error) {
        
    }
}

app.get('/allTransactions',(req,res)=>{
    const transaction = readTransaction();
    res.send(transaction);
})
app.post('/addTransaction',(req,res)=>{

    const {text,amount} = req.body;
    const transaction =readTransaction();
    console.log(req.body)
    const newTransaction ={
        text,
        amount,
        id:uuidv4()
    }
    
    console.log(newTransaction)
    
    transaction.push(newTransaction);
    // console.log(transaction);
    fs.writeFileSync("./transactions.json",JSON.stringify(transaction));
    res.send(transaction);
})


app.delete('/deleteTransaction/:id',(req,res)=>{
const{id}=req.params;
const transaction= readTransaction();
const deletedTrans=transaction.filter(trans=>trans.id!==id);
fs.writeFileSync("./transactions.json",JSON.stringify(deletedTrans));
res.send(deletedTrans)
})


app.put('/editTransaction/:id',(req,res)=>{
    const {id}=req.params;
    const{newText,newAmount}=req.body;
    const transaction= readTransaction();
    const updateTransaction=transaction.find(trans=>trans.id==id);
  
if(updateTransaction>-1){
    transaction[updateTransaction].text=newText;
    transaction[updateTransaction].amount=newAmount;
    fs.writeFileSync("./transactions.json",JSON.stringify(transaction));
    res.send({ message: 'A task was updated',transaction })

}
else{
    res.send({ message: 'Couldnt find a transaction to update'})
 
}

})
    







app.listen(port, () => { console.log('Server listen on port', port) })