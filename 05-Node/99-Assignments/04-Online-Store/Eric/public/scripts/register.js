const form = document.querySelector('.my-login-validation').addEventListener('submit', hundleRegister)

	async	function hundleRegister(ev) {
			ev.preventDefault()
			const username = ev.target.elements.username.value;
			const email = ev.target.elements.email.value;
			const password = ev.target.elements.password.value;
			const newUser = {
                    username: username,
                    email: email,
                    password: password,
                }
                const currentUser = await addRegister(newUser)
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
				window.location.href = "index.html"
				ev.target.reset()
		}

		function addRegister(newUser) { //YS: Why not use async/await here too?
            return new Promise((resolve, reject) => {
                fetch('/user/register', {
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

		