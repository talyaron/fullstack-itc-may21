"use strict";var express=require("express");app=express();var port=process.env.PORT||4e3;app.use(express.json()),app.use(express.static("public")),app.post("/add",function(e,s){console.log(e.body)}),app.listen(port,function(){console.log("Server listen on port",port)});