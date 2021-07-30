const express = require("express");
const app = express();
const port = process.env.port || 5000;
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());

const readAllBeve = () => {
    const allBeve = fs.readFileSync('./beve.json');
    return JSON.parse(allBeve);
}

app.get("/getBeve", (req, res) => {

    const allBeve = readAllBeve();
    
        res.send(allBeve);
  
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
