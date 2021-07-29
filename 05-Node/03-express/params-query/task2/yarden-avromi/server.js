const express = require('express');
app = express();

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

function outside() {
    const jokes = []
    function inside(joke) {
        jokes.push(joke)
    }
    return inside
}
const addJoke = outside()

app.post('/sendJoke', (req, res)=>{
    const { joke } = req.body
    console.log(joke)

    res.send({send:"OK"})
});



app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
