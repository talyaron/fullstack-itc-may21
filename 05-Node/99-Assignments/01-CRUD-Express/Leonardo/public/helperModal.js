// Get the modal
const modalUpload = document.getElementById("modalCreate");
const modalEdit = document.getElementById("modalEdit");

// Get the button that opens the modal
const buttonUpload = document.getElementById("buttonCreate");

// Get the <span> element that closes the modal
const closeUpload = document.getElementById("closeModal");
const closeEdit = document.getElementById("closeEdit");

// When the user clicks the button, open the modal
buttonUpload.addEventListener('click', openModal);

function openModal() {
    modalUpload.style.display = "block";
    modalUpload.classList.add("showModal");
};

// When the user clicks on <span> (x), close the modal
closeUpload.addEventListener('click', closeModal);

function closeModal() {
    modalUpload.style.display = "none";
};

closeEdit.addEventListener('click', closeModalEdit);

function closeModalEdit() {
    modalEdit.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modalUpload || event.target === modalEdit) {
        modalUpload.style.display = "none";
        modalEdit.style.display = "none";
    }
};