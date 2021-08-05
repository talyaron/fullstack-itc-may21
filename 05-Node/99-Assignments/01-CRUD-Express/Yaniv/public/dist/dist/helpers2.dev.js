"use strict";

var onlyFutureToDos = function onlyFutureToDos(ev) {
  try {
    var now = new Date();
    ev.target.setAttribute("min", now.toISOString().substring(0, 10));
  } catch (error) {
    console.error(error);
  }
};

var handleClickedToDo = function handleClickedToDo(ev) {
  try {
    if (ev.target.className !== 'upcoming__item todo' && ev.target.className !== 'later__item todo' && ev.target.className.indexOf('todo__item todo__item--') === -1 || document.querySelector('.edit-form')) return;
    var toDoDiv = ev.target.className.indexOf('todo__item todo__item--') === -1 ? ev.target : ev.target.parentElement;

    if (ev.target.className === 'todo__item todo__item--delete') {
      console.log(ev.target);
      ev.target.addEventListener('click', function (ev) {
        return handleDeleteToDo(ev);
      });
      return;
    }

    editToDosform = setToDoToEdit(toDoDiv);
    editToDosform.addEventListener('submit', function (ev) {
      return handleEditToDo(ev);
    });
  } catch (er) {
    console.error(er);
  }
};

var setToDoToEdit = function setToDoToEdit(toDoDiv) {
  try {
    var clientTimezoneOffset = new Date().getTimezoneOffset() * (-60 * 1000); // in milliseconds

    var toDoContentDiv = toDoDiv.querySelector(".todo__item--content");
    var toDoStatusDiv_1 = toDoDiv.querySelector(".todo__item--status");
    var toDoDueDateDiv = toDoDiv.querySelector(".todo__item--due-date");
    toDoDiv.innerHTML = "<form class=\"edit-form\" id=\"\">\n      <input class=\"edit-form__item edit-form__item--content\" type=\"text\" placeholder=\"Edit your to-do\" minlength=\"2\" maxlength=\"80\" name=\"toDoContent\" id=\"edit-todo-content\" />\n      <select class=\"edit-form__item edit-form__item--status\" name=\"toDoStatus\" id=\"edit-todo-status\">\n        <option value=\"\">choose status</option>\n        <option value=\"Pending...\">Pending...</option>\n        <option value=\"In Progress...\">In Progress...</option>\n        <option value=\"Stuck\">Stuck</option>\n        <option value=\"Done\">Done</option>\n      </select>\n      <input class=\"edit-form__item edit-form__item--due-date\" type=\"date\" min=\"\" name=\"toDoDueDate\" id=\"edit-todo-due-date\" required />\n      <input class=\"edit-form__item edit-form__item--submit\" type=\"submit\" id=\"edit-todo-submit\" value=\"Go\" />\n    </form>";
    var toDoContentInput = document.querySelector("#edit-todo-content");
    var toDoStatusSelect = document.querySelector("#edit-todo-status");
    var toDoDueDateInput = document.querySelector("#edit-todo-due-date");
    var editToDoForm = document.querySelector(".edit-form");
    toDoContentInput.setAttribute('value', toDoContentDiv.innerText);
    toDoStatusSelect.selectedIndex = Array.from(toDoStatusSelect.children).findIndex(function (child) {
      return child.getAttribute('value') === toDoStatusDiv_1.innerText;
    });
    toDoDueDateInput.setAttribute('value', new Date(Date.parse(toDoDueDateDiv.innerHTML) + clientTimezoneOffset).toISOString().substring(0, 10));
    editToDoForm.setAttribute('id', toDoDiv.getAttribute('id') + "-edit-form");
    return editToDoForm;
  } catch (er) {
    console.error(er);
  }
};