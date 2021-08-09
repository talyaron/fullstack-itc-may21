/* This is a simple login 2 + page site exercise
This is the back-end file
*/

const express = require('express')
const Ajv = require("ajv")
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.static('public'));
app.use(cookieParser())
const ajv = new Ajv()




// Listen on port:
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})