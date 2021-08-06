const express = require('express')
const app = require('express')()
const cookieParser = require('cookie-parser')


app.get('/getData', (req ,res)=>{


    res.cookie('cookieName',"Yarden", { maxAge: 3000, httpOnly: true });
    res.send({ok:true})
})

app.use(express.static('public'))

app.listen(3000, ()=>{console.log('listen on 3000')})
