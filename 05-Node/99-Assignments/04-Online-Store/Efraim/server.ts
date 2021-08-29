const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.static('public'));

const publicUsersRoute = require('./routes/publicUsersRoute');
const adminUserRoute = require('./routes/adminUserRoute');
const loginRoute = require('./routes/loginRoute')
const cartRoute = require('./routes/cartRoute')

app.use('/publicUsers', publicUsersRoute);
app.use('/adminUsers', adminUserRoute);
app.use('/login', loginRoute);
app.use('/cart', cartRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})