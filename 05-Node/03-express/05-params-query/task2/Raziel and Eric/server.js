const express=require('express');
const app = express();
const port =process.env.PORT || 7000;
app.use(express.static('public'));


let newJokes =[]

app.get('/', (req, res)=>{
    console.log(req.query);
    res.send({ok:true})
})

app.get('/getJokes',(req, res)=>{
    res.send({jokesGet})
    console.log(newJokes)
})


app.put('/setJokes', (req, res)=>{
    res.send()
    console.log(newJokes)

    res.send({send:"OK"})
});

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
      