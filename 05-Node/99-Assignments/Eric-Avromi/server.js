const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');
const fs = require("fs"); //do  the same to answers and surveys .json?
const surveyRouter = require('./routes/surveyRoute.js')
const userRouter = require('./routes/userRoutes.js')
const {
    v4: uuidv4 
} = require('uuid');  // do  the same to questions?
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use('/survey', surveyRouter) //do the same for questionRouter?

app.use('/users', userRouter)


// const addUserRouter = require('./routes/tasksRoute.js')
// app.use('/users', userRouter)



// app.get('/useAdmin', (req, res) => {
//     const cookie = req.cookies['cookie'];
//     res.send({cookie})

// })






// class Survey {
//     constructor(title){
//         this.title = title;
//         this.id = uuidv4();
//         this.questions = [];
//         this.admin = {//email:adminEmail
//             }
//     }
// }



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});