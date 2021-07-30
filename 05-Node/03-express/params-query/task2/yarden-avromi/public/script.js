const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const joke = event.target.elements.joke.value
    
    fetch('/sendJoke', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ joke })
    })
        .then(res => res.json())
        .then(data => console.log(data))

    event.target.reset()
}

