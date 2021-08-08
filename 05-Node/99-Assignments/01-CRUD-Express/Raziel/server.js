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
        console.log(transaction)  //YS: console.log?
        return JSON.parse(transaction)
    } catch (error) { 
        //YS: ???
    }
}

app.get('/allTransactions',(req,res)=>{ //YS: Error handling?
    const transaction = readTransaction();
    res.send(transaction);
})
app.post('/addTransaction',(req,res)=>{ //YS: Error handling?

    const {text,amount} = req.body;
    const transaction =readTransaction();
    console.log(req.body) //YS: console.log?
    const newTransaction ={
        text,
        amount,
        id:uuidv4()
    }
    
    console.log(newTransaction) //YS: console.log?
    
    transaction.push(newTransaction);
    // console.log(transaction);
    fs.writeFileSync("./transactions.json",JSON.stringify(transaction));
    res.send(transaction);
})


app.delete('/deleteTransaction/:id',(req,res)=>{ //YS: Error handling?
const{id}=req.params;
const transaction= readTransaction();
const deletedTrans=transaction.filter(trans=>trans.id!==id);
fs.writeFileSync("./transactions.json",JSON.stringify(deletedTrans));
res.send(deletedTrans)
})


app.put('/editTransaction/:id',(req,res)=>{ //YS: Error handling?
    const {id}=req.params;
    const{newText,newAmount}=req.body;
    const transaction= readTransaction();
    const updateTransaction=transaction.find(trans=>trans.id==id); //YS: If you are using find, you can  just use the actual object, not the index. 
  
if(updateTransaction>-1){
    transaction[updateTransaction].text=newText; //YS: Should be: updateTransaction.text 
    transaction[updateTransaction].amount=newAmount; //YS: Should be: updateTransaction.amount 
    fs.writeFileSync("./transactions.json",JSON.stringify(transaction));
    res.send({ message: 'A task was updated',transaction })

}
else{
    res.send({ message: 'Couldnt find a transaction to update'}) //YS: res.status(400)..send({ message: 'Couldnt find a transaction to update'})
 
}

})
    







app.listen(port, () => { console.log('Server listen on port', port) })