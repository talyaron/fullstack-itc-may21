//modal
const bgModal = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
const btnModal = document.querySelector('.container__form__form--buttons--signup')

//buttons
const btnLogin = document.querySelector('.container__form__form--buttons--login')

//form
const form = document.querySelector('.modal-bg__modal__form')

//addEventListener
btnLogin.addEventListener('click', loginUser)
btnModal.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
form.addEventListener('submit', handleSumbit)

async function loginUser(ev) {

    ev.preventDefault()

    //inputs
    const inputEmail = document.querySelector('.container__form__form--email').value
    const inputPassword = document.querySelector('.container__form__form--password').value

    const user = {
        email: inputEmail,
        password: inputPassword,
    }

    const response = await enterLoginPromise(user)

    alert(response.ok)
    window.location.href = 'main.html'

}

//MODAL
function openModal(ev) {
    try {
        ev.preventDefault()

        bgModal.classList.add('bg-active')

    } catch (er) {
        console.error(er);
    }
}

function closeModal() {
    bgModal.classList.remove('bg-active')
}

async function handleSumbit(ev) {
    try {
        ev.preventDefault()

        const username = ev.target.elements.username.value
        const email = ev.target.elements.emaillogin.value
        const password = ev.target.elements.passwordlogin.value

        const newUser = {
            username: username,
            email: email,
            password: password,
        }

       
        const response = await addSignUpPromise(newUser)
        const { ok } = response
        alert(ok)
        bgModal.classList.remove('bg-active')

        

        ev.target.elements.reset()

    } catch (e) {
        console.log(e)
    }
}

//PROMISE
function addSignUpPromise(newUser) {
    return new Promise((resolve, reject) => {
        fetch('/signUpUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(function (res) {
            if (res.status === 200 && res.ok) {
                return res.json().then(user => { resolve(user) });
            } else {
                return res.json().then(user => { alert(user.error) })
            }
        })
    })
}

function enterLoginPromise(newUser) {
    return new Promise((resolve, reject) => {
        fetch('/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(function (res) {
            if (res.status === 200 && res.ok) {
                return res.json().then(user => { resolve(user) });
            } else {
                return res.json().then(user => { alert(user.error) })
            }
        })
    })
}


//
