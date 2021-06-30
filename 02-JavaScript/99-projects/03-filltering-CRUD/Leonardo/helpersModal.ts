// Get the modal
const modalUpload = document.getElementById("modalUpload");
const modalEdit = document.getElementById("modalEdit");

// Get the button that opens the modal
const buttonUpload = document.getElementById("buttonUpload");

// Get the <span> element that closes the modal
const closeUpload = document.getElementById("closeUpload");
const closeEdit = document.getElementById("closeEdit");

// When the user clicks the button, open the modal 
buttonUpload.onclick = function () {
    modalUpload.style.display = "block";
    modalUpload.classList.add("showModal");
};

// When the user clicks on <span> (x), close the modal
closeUpload.onclick = function () {
    modalUpload.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modalUpload || event.target === modalEdit) {
        modalUpload.style.display = "none";
        modalEdit.style.display = "none";
    }
};

// When the user clicks on <span> (x), close the modal
closeEdit.onclick = function () {
    modalEdit.style.display = "none";
};
