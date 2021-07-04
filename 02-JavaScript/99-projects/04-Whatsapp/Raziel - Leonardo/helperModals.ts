// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const button = document.getElementById("button");

// Get the <span> element that closes the modal
const closeModal = document.getElementById("close");

// When the user clicks the button, open the modal 
button.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
