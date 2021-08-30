//btn
const btnReturn = <HTMLElement>document.querySelector("#a-return")
const form = <HTMLElement>document.querySelector("#form-login")


btnReturn.addEventListener("click", returnHomePage)
form.addEventListener("submit", enterToMainStores)


async function enterToMainStores(ev) {
    ev.preventDefault()
    try {
        let { email, password, repassword } = ev.target.elements
        email = email.value
        password = password.value
        repassword = repassword.value

        if (password !== repassword) throw new Error("Your password and repassword are not the same")

        const loginUser = {
            email: email,
            password: password
        }

        const response: any = await enterPromiseLogin(loginUser)
        const { ok, user } = response

        swal(`${ok}`, {
            icon: "success",
            button: false,
        });

        const location = window.location.origin

        //window.location.href = `main.html?email=${email}?store=${user.store}`

        if (user.role === "admin") {
            setInterval(function () {
                if (user.store) window.location.replace(`${location}/main.html?email=${email}?store=${user.store}`)
                else window.location.replace(`${location}/stores.html?email=${email}`)
            }, 1000);
        } else {
            setInterval(function () { window.location.replace(`${location}/stores.html?email=${email}`) }, 1000);
        }


    } catch (e) {
        swal('Oops!', `${e}`, `error`)
    }
}



function returnHomePage() {
    try {
        const location = window.location.origin
        window.location.replace(`${location}/register.html`)
    } catch (e) { alert(e) }
    // window.location.href = 'register.html'
}