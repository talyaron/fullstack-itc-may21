

    async function handleRegister(ev) {
        ev.preventDefault()
        const username = ev.target.elements.username.value;
        const password = ev.target.elements.password.value;
        const email = ev.target.elements.email.value
        const result = await axios.post('/createUser', {
            username: username,
            password: password,
            email: email
        })
        if(result.data === "Email already taken!"){
            alert(`${result.data}`)
        }else{
        
        alert(`Register succesful, ${username}!`)}
        console.log(result)
        ev.target.reset();
    }