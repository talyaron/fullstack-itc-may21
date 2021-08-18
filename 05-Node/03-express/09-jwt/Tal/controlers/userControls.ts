interface Admin{
     username: string; 
     password:string; 
}
const admins:Array<Admin> = [{ username: 'tal', password: '123' }, { username: 'dana', password: '1234' }];

export const loginControl = (req, res) => {

    const { username, password } = req.body;
    console.log(username, password);

    const admin:Admin = admins.find(admin=>admin.username === username);
    if(admin !== undefined && admin.password === password){
        console.log('is admin');
        res.cookie('user',{role:'admin'}, { maxAge: 900000, httpOnly: true });
    } else {
        res.cookie('user',{role:'public'}, { maxAge: 900000, httpOnly: true });
    }
   
    res.send({ login: true })
}

export const registerControl = (req, res) => {
    res.send({ register: true });
}