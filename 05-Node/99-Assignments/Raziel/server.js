const express = require('express');
const app = express();
const port= process.env.const || 3500;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());

const readAllEntery=() => {
    const allEntery = fs.readFileSync("./EntryList.json");
    return JSON.parse( allEntery);
}

 const allEntery = readAllEntery();
app.post('/addExpense',(req, res) => {
    const {type, title,amount} = req.body;
    const newExpense={
        type: 'expense',
        title: title,
        amount: amount

    }

 allEntery.push(newExpense);
 fs.writeFileSync("./EntryList.json", JSON.stringify(allEntery ));
console.log(allEntery);
        res.send({ ok: "Added Expense", task:allEntery  });
})

// app.post('/addIncome',(req, res) => {
//     const {type, title,amount} = req.body;
//     const newIncome={
//         type: 'income',
//         title: title,
//         amount: amount

//     }
//  const allEntery = readAllEntery();
//  allEntery.push(newIncome);
//  fs.writeFileSync("./EntryList.json", JSON.stringify(allEntery ));
// console.log(allEntery);
//         res.send({ ok: "Added Expense", task:allEntery  });
// })

app.listen(port, () => { console.log('Server listen on port', port) })