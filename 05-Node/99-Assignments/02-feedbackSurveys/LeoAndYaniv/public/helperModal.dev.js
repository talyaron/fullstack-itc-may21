"use strict";

// Get the modal
var modalUpload = document.getElementById("modalQuestion"); // Get the button that opens the modal

var buttonCreate = document.getElementById("buttonCreate"); // Get the <span> element that closes the modal

var closeUpload = document.getElementById("closeModal"); // When the user clicks the button, open the modal

buttonCreate.addEventListener('click', openModal(null));

function openModal(qUuid, qContent) {
  try {
    var instructionElement = document.querySelector('#create-or-edit');
    var submitBtn = document.querySelector('#submit-question');

    if (qUuid) {
      var modalContent = document.querySelector('.modal-content');
      modalContent.id = qUuid;
      var questionContent = document.querySelector('#question-content');
      questionContent.value = qContent;
      instructionElement.innerText = 'Edit the question';
      submitBtn.value = 'Edit question';
    } else {
      instructionElement.innerText = 'Create a new question';
      submitBtn.value = 'Add question';
    }

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