const bgModal = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
const btnModalInput = <HTMLButtonElement>document.querySelector('.btn-modal')
const btnEdit = <HTMLButtonElement>document.querySelector('.btn-edit')

modalClose.addEventListener('click', closeModal)

function openModal() {
    try {
        bgModal.classList.add('bg-active')
        btnEdit.style.display = 'none'
        btnModalInput.style.display = 'block'
    } catch (e) {
        alert(e)
    }
}

function closeModal() {
    try {
        bgModal.classList.remove('bg-active')
    } catch (e) {
        alert(e)
    }
}