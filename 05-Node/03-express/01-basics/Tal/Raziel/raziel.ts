const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const port=process.env.PORT || 3005;

class Person{
    arrayOfPerson=[];
    addPerson(person){
        this.arrayOfPerson.push(person)
    }
}

const people= new Person();

app.use(bodyParser.json());

app.post('/addPerson',(req,res)=>{
    try {
        const {body}=req;
        const {name,age}=body;
        if(!name ||!age){throw new Error('Enter valid name and age')};
        people.addPerson(body);

        res.send(req.body)
    } catch (error) {
        res.status(400).send({error: e.message});
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})