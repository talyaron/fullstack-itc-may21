const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');
const fs = require("fs"); 
const surveyRouter = require('./routes/surveyRoute.js')
const userRouter = require('./routes/userRoutes.js')
const {
    v4: uuidv4 
} = require('uuid');  
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use('/survey', surveyRouter)



app.use('/users', userRouter)


// const addUserRouter = require('./routes/tasksRoute.js')
// app.use('/users', userRouter)




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});