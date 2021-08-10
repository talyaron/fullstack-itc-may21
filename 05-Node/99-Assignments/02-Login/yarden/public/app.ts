// This is the client side file.

// Send input to server:
async function handleSubmit(ev) {
        ev.preventDefault()
        const name = ev.target.elements.name.value
        const email = ev.target.elements.email.value   
        
        const user = await axios.post('/addUser', {
            name: name,
            email: email
        })
        console.log(user)
        ev.target.reset();
        
        window.location.href = '/page2.html'
}

// Display user details on site pages:
async function getUser() {
    const userDetails = await axios.get('/user')
    const name = userDetails.data.name
    const email = userDetails.data.email
    alert(`Hi, ${name}. Email registered: "${email}". Thanks for registering!`)
}
