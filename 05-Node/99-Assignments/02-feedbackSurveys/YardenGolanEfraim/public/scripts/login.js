
async function handleLogin(event){
    event.preventDefault()
    try{
    const password = event.target.elements.password.value;
    const email = event.target.elements.email.value
    const allUsers = await axios.get('/users')
    if(allUsers.data.users.find(info => info.email === email && info.password === password) != undefined){ //YS: Long and confusing if statement, separate to variables. 
    const result = await axios.post('/login', {
                    password: password,
                    email: email
                })
           
            event.target.reset();
           alert("login success!!") //YS: How do you know it was successful?: if (result)
            window.location.href="/surveylist.html";}
            else{
                alert("incorrect email or password!")
                throw new Error ("incorrect email or password") 
            }
}  catch (e) {
    console.error(e)
}}
document.querySelector('.form-field').addEventListener("submit", handleLogin)
   