"use strict";

// Get the modal
var modalUpload = document.getElementById("modalCreate"); // Get the button that opens the modal

var buttonUpload = document.getElementById("buttonCreate"); // Get the <span> element that closes the modal

var closeUpload = document.getElementById("closeModal"); // When the user clicks the button, open the modal

buttonUpload.addEventListener('click', openModal);

function openModal() {
  try {
    modalUpload.style.display = "block";
    modalUpload.classList.add("showModal");
  } catch (error) {
    console.error(error);
  }

  ;
}

; // When the user clicks on <span> (x), close the modal

closeUpload.addEventListener('click', closeModal);

function closeModal() {
  try {
    modalUpload.style.display = "none";
  } catch (error) {
    console.error(error);
  }

  ;
}

; // When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  try {
    if (event.target === modalUpload) {
      modalUpload.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  }

  ;
};