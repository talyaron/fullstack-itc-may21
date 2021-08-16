

    function handleRegister(ev) { //YS: Good! 
        ev.preventDefault()
        try{
        const username = ev.target.elements.username.value;
        const password = ev.target.elements.password.value;
        const email = ev.target.elements.email.value
        const result = axios.post('/users', {
            username: username,
            password: password,
            email: email
        })
        if(result.data === "Email already taken!"){
            alert(`${result.data}`)
        }else{
        
        alert(`Register succesful, ${username}!`)}
        ev.target.reset();
    }catch (e) {
        console.error(e)
    }}
    document.querySelector(".form-field").addEventListener("submit", handleRegister)