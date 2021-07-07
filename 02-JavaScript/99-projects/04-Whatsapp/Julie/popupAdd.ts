const btnModal = (<HTMLButtonElement>document.querySelector('.modal-btn'))
const bgModal =  document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
const inputName = (<HTMLInputElement>document.querySelector('#name'))
const inputPhone = (<HTMLInputElement>document.querySelector('#phone'))
const btnModalInput = (<HTMLButtonElement>document.querySelector('.btn-modal'))
const boardRoot:HTMLElement = document.querySelector('#board')
const faPlus = (<HTMLButtonElement>document.querySelector('.fa-plus'))
faPlus.addEventListener('click', (e)=> openModal(e))

function openModal(e){
    e.preventDefault()
    bgModal.classList.add('bg-active')
    console.log("hi")   
    //set
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

