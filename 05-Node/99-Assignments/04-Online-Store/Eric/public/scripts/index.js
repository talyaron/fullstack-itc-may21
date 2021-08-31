        const form = document.querySelector('.my-login-validation').addEventListener('submit', loginUser)

        async function loginUser(ev) {
            ev.preventDefault()
            const email = ev.target.elements.email.value;
            const password = ev.target.elements.password.value;
            const user = {email: email, password: password}
            const currentUser = await enterLogin(user)
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            window.location.href = "store.html"        
        }


        function enterLogin(userLogin) { //YS: Why not use async/await here too? 
            return new Promise((resolve, reject) => {
                fetch('/user/userLogin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userLogin)
                }).then(function (res) {
                    if (res.status === 200 && res.ok) {
                        return res.json().then(user => {
                            resolve(user)
                        });
                    } else {
                        return res.json().then(user => {
                            alert(user.error)
                        })
                    }
                })
            })
        }