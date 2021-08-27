async function handleLogin(ev):Promise<void>{
    ev.preventDefault();
   let {username, password} = ev.target.elements;
   username = username.value;
   password = password.value;
   console.log(username, password)

   const {data} = await axios.post('/user/login', {username, password});
   console.log(data)
}

async function handleRegister(ev):Promise<void>{
    ev.preventDefault();
    let {username, password} = ev.target.elements;
    username = username.value;
    password = password.value;
    console.log(username, password)
 
    const {data} = await axios.post('/user/register', {username, password});
    console.log(data)
}

async function getPasswords(ev):Promise<void>{

 
    const {data} = await axios.get('/secrets/getAllPasswords');
    console.log(data);
}
