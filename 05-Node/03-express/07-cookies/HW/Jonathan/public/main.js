
async function getCookies(ev) {

    ev.preventDefault()

    const response = await axios.get('/getCookie')
    const data = response.data

    const root = document.querySelector('#root')
    root.innerHTML = `<p>Hello ${data}, welcome to our bank. Have a nice day`

}