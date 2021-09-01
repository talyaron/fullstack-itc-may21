const { readAllUsers } = require('../modal/user');

export function isAdmin(req, res, next){ //YS: Great, but this isnt being used anywhere. Should be used in product routes, for example delete products 
    const { userIdLogIn } = req.cookies;
    const allUsers = readAllUsers();
    const admin = allUsers.find((user) => user.id === userIdLogIn);

    if(admin.role === 'admin'){
        console.log('Admin user');
        next();
    }else{
        res.status(404).send('This site is only for administrators');
    }
}