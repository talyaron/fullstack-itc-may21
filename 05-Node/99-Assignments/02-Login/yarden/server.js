/* 
    This is a simple login 2 + page site exercise
            This is the back-end file.
*/

// Require expressions and constants for this project:
const express = require('express')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.static('public'));
app.use(cookieParser())

const users = []

// POST to create user on server:
app.post('/addUser', (req, res) => {
    const user = { 
        name: req.body.name, 
        email: req.body.email }
    users.push(user)
    const user1 = JSON.stringify({ user })
    res.cookie('userDetails', { user1 }, { maxAge: 3000000, httpOnly: true })
    res.status(201).send({ ok: true })
})

app.get('/user', (req, res) => {
    const { user1 } = req.cookies.userDetails
    const cookie = JSON.parse(user1)
    const { name, email } = cookie.user
    res.send({name, email})
})



// Listen on port:
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})