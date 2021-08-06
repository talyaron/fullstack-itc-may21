const express = require('express');
const app = require('express')()
const cookieParser = require('cookie-parser');

app.use(express.static('public'))

app.use(cookieParser());
app.get('/getData', (req ,res)=>{


    console.log(req.cookie);
    const {cookieName}=req.cookie;
    
      

    const name =JSON.stringify({name:"Cookie MOnster"});
    res.cookie('cookieName',name, { maxAge: 8000000, httpOnly: true });
    res.send({ok:true})

})




app.listen(3000, ()=>{console.log('listen on 3000')})