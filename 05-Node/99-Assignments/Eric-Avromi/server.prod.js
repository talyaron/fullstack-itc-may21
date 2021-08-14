"use strict";var express=require("express"),app=express(),port=process.env.PORT||8080,cookieParser=require("cookie-parser"),fs=require("fs"),surveyRouter=require("./routes/surveyRoute.js"),userRouter=require("./routes/userRoutes.js"),_require=require("uuid"),uuidv4=_require.v4;app.use(express.static("public")),app.use(cookieParser()),app.use(express.json()),app.use("/survey",surveyRouter),app.use("/users",userRouter),app.listen(port,function(){console.log("Server listening at http://localhost:".concat(port))});