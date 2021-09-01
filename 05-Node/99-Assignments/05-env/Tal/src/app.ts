console.log('No value for FOO yet:', process.env.SECRET);

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
console.log('Now the value for secret is:', process.env.SECRET);
console.log('Now the value for FOO is:', process.env.FOO);

const express = require('express');



const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});


app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});