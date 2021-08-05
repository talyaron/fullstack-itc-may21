const express = require('express');
const app = express();
const port= process.env.const || 0007;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());

const readAllEntery=() => {
    const allEntery = fs.readFileSync("./EntryList.json");
    return JSON.parse( allEntery);
}
app.post('/createExpense',(req, res) => {
    const {type, title,amount} = req.body;
    const newExpense={
        type: 'expense',
        title: title,
        amount: amount

    }
 const allEntery = readAllEntery();
 allEntery.push(newExpense);
 fs.writeFileSync("./EntryList.json", JSON.stringify(allEntery ));

        res.send({ ok: "Added Expense", task:allEntery  });
})

app.listen(port, () => { console.log('Server listen on port', port) })