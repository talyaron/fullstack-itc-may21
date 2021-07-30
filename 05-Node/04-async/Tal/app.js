const express = require('express');
app = express();
const port = process.env.PORT || 3000;

let students = [{ name: 'moshe', grade: 97 }];

app.use(express.json());

app.use(express.static('public'));

app.get('/getData', (req, res) => {
    setTimeout(() => {
        res.send(students);
    }, 2500)

})


app.listen(port, () => { console.log('Server listen on port', port) })