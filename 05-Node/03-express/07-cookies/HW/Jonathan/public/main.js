//buttons
const btnReturn = document.querySelector('.headerh1--i')

//addEventListener
btnReturn.addEventListener('click',returnIndex);

function returnIndex(ev){
    ev.preventDefault();
    window.location.href = 'index.html'
}



async function getCookies(ev) {

    ev.preventDefault()

    const response = await axios.get('/getCookie')
    const { username, balance } = response.data


    const rootMessage = document.querySelector('#rootMessage')
    rootMessage.innerHTML = `<p>Hello ✋ ${username.charAt(0).toUpperCase() + username.slice(1)}, welcome to our bank. Have a nice day</p>`

    const rootBalance = document.querySelector('#rootBalance')
   

    if (balance < 0) {
        rootBalance.style.border = '2px solid #FF6666'
        rootBalance.innerHTML = `
                                     <p>Your balance account is:
                                        <span class="rootBalance--red">₪ ${parseFloat(balance)}</span>
                                     </p>
                                `;
    } else {
        rootBalance.style.border = '2px solid #90EE90'
        rootBalance.innerHTML = `
                                     <p>Your balance account is:
                                        <span class="rootBalance--green">₪ ${parseFloat(balance)}</span>
                                     </p>
                                `;
    }
    const root = document.querySelector('#root')

}
