// This is the client side main TS file

// Send input to server:
async function handleSubmit(ev) {
        ev.preventDefault()
        const name = ev.target.elements.name.value
        const email = ev.target.elements.email.value   
        
        const user = await axios.post('/uddUser', {
            name: name,
            email: email
        })
        console.log(user)
        ev.target.reset();
        
        window.location.href = '/page2.html'
}

