const express = require('express');
const todosRoute = require('./routes/todosRoute');
const userRoute = require('./routes/usersRoute');
const remindersRoute = require('./routes/remindersRoute');
const app = express();
const PORT = 8000;
app.use(express.json());

app.use('/todos', todosRoute);

app.use('/users', userRoute);

app.use('/reminders', remindersRoute);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
