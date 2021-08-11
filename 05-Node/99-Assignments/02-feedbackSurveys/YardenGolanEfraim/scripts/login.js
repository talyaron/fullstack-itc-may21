// Send password and email to server
async function handleLogin(event){
    event.preventDefault()
    const password = event.target.elements.password.value;
    const email = event.target.elements.email.value
    const result = await axios.post('/login', {
                    password: password,
                    email: email
                })
            await console.log(result)
            event.target.reset();
} 
//    Go to surveys page
document.getElementById("submit").addEventListener("click", ()=>{
    window.location.href="/surveylist.html";
});
   