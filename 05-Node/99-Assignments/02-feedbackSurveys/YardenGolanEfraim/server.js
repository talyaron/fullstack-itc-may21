const express = require('express');
const cookieParser = require('cookie-parser');

// Import routes
const loginRoute = require('./routes/loginRoute')
const questionsRoute = require('./routes/questionsRoute')
const surveysRoute = require('./routes/surveysRoute')
const usersRoute = require('./routes/usersRoute')
const adminRoute = require('./routes/adminRoute')
const votesRoutes = require('./routes/votesRoute')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser())

// Routes
app.use('/login', loginRoute)
app.use('/questions', questionsRoute)
app.use('/surveys', surveysRoute)
app.use('/users', usersRoute)
app.use('/admin', adminRoute)
app.use('/votes', votesRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

