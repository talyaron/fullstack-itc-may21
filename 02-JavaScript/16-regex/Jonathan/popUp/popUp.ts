const btnModal = (<HTMLButtonElement>document.querySelector('.modal-btn'))
const bgModal =  document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
const inputName = (<HTMLInputElement>document.querySelector('#name'))
const inputEmail = (<HTMLInputElement>document.querySelector('#email'))
const btnModalInput = (<HTMLButtonElement>document.querySelector('.btn-modal'))
const boardRoot:HTMLElement = document.querySelector('#board')

btnModal.addEventListener('click', openModal)

function openModal(){
    bgModal.classList.add('bg-active')
}

modalClose.addEventListener('click', closeModal)

function closeModal(){
    bgModal.classList.remove('bg-active')
}

btnModalInput.addEventListener('click', putInputOnDOM)

function putInputOnDOM(){
    let html:string = "";
    
    console.log(inputEmail.value)
    console.log(inputName.value)

    html += `<p> ${inputName.value}</p>
                <p> ${inputEmail.value}</p>`

    boardRoot.insertAdjacentHTML('afterend',html)

    bgModal.classList.remove('bg-active')
}

