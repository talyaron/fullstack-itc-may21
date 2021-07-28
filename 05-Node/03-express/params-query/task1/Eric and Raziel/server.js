const express=require('express');
const app = express();
const fs=require('fs');
const port =process.env.PORT || 7000;

app.use(express.static('public'));


// app.get('/', (req, res)=>{
//     console.log(req.query);
//     res.send({ok:true})});

    // app.post('/', function(req, res) {
    //     Console.log(req.body.testVariable);
    // });
app.get('/',(req,res)=>{
    console.log(req.body.color);
   
    res.send({ok:true});
})

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
      