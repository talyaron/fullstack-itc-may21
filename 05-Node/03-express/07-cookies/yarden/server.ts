const express = require('express')
const app = require('express')()
const cookieParser = require('cookie-parser')

app.use(express.static('public'))

app.listen(3000, ()=>{console.log('listen on 3000')})
