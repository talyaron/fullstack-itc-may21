async function handleRegister(ev) {
    ev.preventDefault()
    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;
        const repassword = ev.target.elements.repassword.value;
        const admincode = ev.target.elements.admincode.value;
        const result = await axios.post('/publicUsers/addUser', {
            email: email.toLowerCase(),
            password: password,
            repassword: repassword,
            role: "public",
            admincode: admincode
        })
        if (result.data === `Register Succesful!`) {
            alert(`${result.data} ${email}`)
        } else {
            alert(`Email taken or Passwords don't match!`)
        }
        ev.target.reset();
    } catch (e) {
        console.error(e)
    }
}
document.querySelector(".form-field").addEventListener("submit", handleRegister)