"use strict";

/* Helper js file for modals */
// Brightness-toggle modal:
var settingsButton = document.querySelector('.fa-cog');
var settingsModal = document.querySelector('.settings-modal');
var changeModeButton = document.querySelector('.fa-adjust');
var bodyElement = document.querySelector('body');
settingsButton.addEventListener('click', function () {
  settingsModal.classList.remove('hide');
});
changeModeButton.addEventListener('click', function () {
  if (bodyElement.style.backgroundColor !== "white") {
    bodyElement.style.backgroundColor = "white";
    settingsModal.classList.add('hide');
  } else {
    bodyElement.style.backgroundColor = "rgba(17, 17, 18, 0.92)";
    settingsModal.classList.add('hide');
  }
}); // Add-task modal open:

var plusButton = document.querySelector('.button-wrapper');
var addTaskModal = document.querySelector('.add-task-modal');
plusButton.addEventListener('click', function () {
  addTaskModal.classList.remove('hide');
}); // Edit-task modal open & close:

var openEditModal = function openEditModal() {
  var editModal = document.querySelector('.edit-modal-wrapper');
  editModal.classList.remove('hide');
};

var closeEditModal = function closeEditModal() {
  var editModal = document.querySelector('.edit-modal-wrapper');
  editModal.classList.add('hide');
};