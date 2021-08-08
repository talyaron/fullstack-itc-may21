const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.json())

const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

app.use(express.static('public'));



const data = {
  foo: 1,
  bar: "abc"
}




class Students{
    list = []
    addStudent(student){
        this.list.push(student)
    }
}

const students = new Students
app.get('/style.css',(req,res)=>{
    const css = fs.readFileSync('style.css')
    res.send(css)
})


// app.post('/testPost', (req, res)=>{
//     console.log(req.body)
//     res.send({ok:true})
// })

app.get('/', (req, res) => {
  res.send('Hello Eric!')
})

app.get('/blabla', (req,res)=>{
    res.send('bla bla!')
})

app.post('/addStudent', (req, res)=>{

    try{

        const schema = {
            type: "object",
            properties: {
              name: {type: "string"},
              id: {type: "integer"}
            },
            required: ["name", "id"],
            additionalProperties: false
          }
          const validate = ajv.compile(schema)


    const {body} = req

    const valid = validate(body)
    if (!valid){ 
        validate.errors.forEach(err => 
            console.log(err.message)
        );
        throw new Error ('invalid data was transfered')
    }

    // const {name, id}= body
    // if(!name || !id){throw new Error ('No name or id in data')}
    
    students.addStudent(body)
    console.log(students.list)
    res.send(students.list)
}catch(e){
    console.log(e)
    res.status(400).send({error:e.message}) //number of bad request
}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

