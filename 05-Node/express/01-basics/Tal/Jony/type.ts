import express from 'express'; //get library
const app = express(); //get express
const port =  process.env.PORT || 8000; //port
import bodyParser from 'body-parser'; //get library json parse


//tsc typescript
//npm i --save-dev

class Students {
    list = [];
    addStudent(student) {
        this.list.push(student)
    }
}

const students = new Students();

app.use(bodyParser.json()) //use express to get parse json


app.post('/addStudent', (req, res) => { //url
    try {

        const { body } = req; //body of the post

        const { name, id } = body; //post
        if(!name || !id){throw new Error('No name or id in data')}

        students.addStudent(body);

        console.log(students.list)
        res.send(body);
    } catch (e) {
        console.log(e)
        res.status(400).send({ error: e.message });
    }

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})