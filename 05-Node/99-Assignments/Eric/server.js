/*You should have a list of tasks
create a task
update a task (done/not done/ update text)
delete a task

make it responsive, and look and feel of KEEP

//optional
order tasks*/

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

const { v4: uuidv4 } = require('uuid');







app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

