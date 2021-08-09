// This is the client side main TS file

// Handle submit that transfers user to page 2 and shows their name and email
async function handleSubmit(ev) {
        ev.preventDefault()
        const name = ev.target.elements.name.value
        const email = ev.target.elements.email.value   

        const user = await axios.post('/api/uddUser', {
            name: name,
            email: email
        })
        function goToSite(event:MouseEvent) {
            window.location.href = '/page2.html'
        }
}

