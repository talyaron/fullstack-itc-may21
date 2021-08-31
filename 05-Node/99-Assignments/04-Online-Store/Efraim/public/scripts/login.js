async function handleLogin(event){
    event.preventDefault()
    try{
    const password = event.target.elements.password.value;
    const email = event.target.elements.email.value
    const res = await axios.post('/login/login', {
                    password: password,
                    email: email.toLowerCase()
                })
            if (res.data.token) {
            localStorage.setItem('token', JSON.stringify(res.data.token));}
            event.target.reset();
           alert("login success!!")
            window.location.href=`${res.data.URL}`;
            
}  catch (e) {
    console.error(e)
}}
document.querySelector('.form-field').addEventListener("submit", handleLogin)
   