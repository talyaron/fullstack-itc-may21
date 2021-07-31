const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

let drinks = [{drinkName: 'pepsi', image: "https://m.media-amazon.com/images/I/61Q7SR0r9XL._SL1500_.jpg"}]

app.use(express.json())
app.use(express.static('public'))

app.get('/getDrinks', (req, res) =>{
    setTimeout(() =>{
    res.send()
    }, 2500)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})