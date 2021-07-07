var btnModal = document.querySelector('.modal-btn');
var bgModal = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var inputName = document.querySelector('#name');
var inputPhone = document.querySelector('#phone');
var btnModalInput = document.querySelector('.btn-modal');
var boardRoot = document.querySelector('#board');
btnModal.addEventListener('click', openModal);
function openModal() {
    bgModal.classList.add('bg-active');
}
modalClose.addEventListener('click', closeModal);
function closeModal() {
    bgModal.classList.remove('bg-active');
}
btnModalInput.addEventListener('click', putInputOnDOM);
function putInputOnDOM() {
    var html = "";
    console.log(inputEmail.value);
    console.log(inputName.value);
    html += "<p> " + inputName.value + "</p>\n                <p> " + inputEmail.value + "</p>";
    boardRoot.insertAdjacentHTML('afterend', html);
    bgModal.classList.remove('bg-active');
}
