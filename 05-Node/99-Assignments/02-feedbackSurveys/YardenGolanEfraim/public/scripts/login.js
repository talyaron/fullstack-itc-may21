// Send password and email to server
async function handleLogin(event){
    event.preventDefault()
    const password = event.target.elements.password.value;
    const email = event.target.elements.email.value
    const allUsers = await axios.get('/users')
    console.log(allUsers.data.users.find(info => info.email === email))
    if(allUsers.data.users.find(info => info.email === email && info.password === password) != undefined){
    const result = await axios.post('/login', {
                    password: password,
                    email: email
                })
           
            event.target.reset();
           alert("login success!")
            window.location.href="/surveylist.html";}
            else{
                alert("incorrect email or password!")
                throw new Error ("incorrect email or password") 
            }
} 
   