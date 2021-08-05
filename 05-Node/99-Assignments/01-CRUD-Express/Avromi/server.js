const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

const taskRouter = require('./routes/tasksRoute.js')
const {
    v4: uuidv4
} = require('uuid');

app.use(express.json())
app.use(express.static('public'))



app.use('/tasks', taskRouter)



app.listen(port, () => {
    console.log(`App Listening on port: ${port}`);
})