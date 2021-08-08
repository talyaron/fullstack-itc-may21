const onlyFutureToDos = (ev): void => {
  try {
    const now: Date = new Date();
    ev.target.setAttribute("min", now.toISOString().substring(0, 10));

  } catch (error) {
    console.error(error);
  }
}

const handleClickedToDo = (ev: any): void => {
  try {

    if  (((ev.target.className !== 'upcoming__item upcoming__item--upcoming todo')  && //YS: You can use classList.contains instead. 
          (ev.target.className !== 'later__item later__item--later todo') &&
          (ev.target.className.indexOf('todo__item todo__item--') === -1) &&
          (ev.target.className !== 'fa fa-trash')) ||
         (document.querySelector('.edit-form'))) return;
    
    const toDoDiv = (ev.target.className.indexOf('todo__item todo__item--') === -1) ? ev.target : ev.target.parentElement;

    if ((ev.target.className === 'todo__item todo__item--delete') ||
        (ev.target.className === 'fa fa-trash')) {
      handleDeleteToDo(ev);
      return;
    }
    
    editToDosform = setToDoToEdit(toDoDiv);
    editToDosform.addEventListener('submit', ev => handleEditToDo(ev));

  } catch (er) {
    console.error(er);
  }
}

const setToDoToEdit = (toDoDiv: HTMLElement): HTMLFormElement => {
  try {
    const clientTimezoneOffset: number = new Date().getTimezoneOffset()*(-60*1000); // in milliseconds

    const toDoContentDiv: HTMLElement = toDoDiv.querySelector(`.todo__item--content`)
    const toDoStatusDiv: HTMLElement = toDoDiv.querySelector(`.todo__item--status`)
    const toDoDueDateDiv: HTMLElement = toDoDiv.querySelector(`.todo__item--due-date`);

    toDoDiv.innerHTML =
    `<form class="edit-form" id="">
      <input class="edit-form__item edit-form__item--content" type="text" placeholder="Edit your to-do" minlength="2" maxlength="80" name="toDoContent" id="edit-todo-content" />
      <select class="edit-form__item edit-form__item--status" name="toDoStatus" id="edit-todo-status">
        <option value="">Choose status</option>
        <option value="Pending...">Pending...</option>
        <option value="In progress...">In progress...</option>
        <option value="Stuck">Stuck</option>
        <option value="Done">Done</option>
      </select>
      <input class="edit-form__item edit-form__item--due-date" type="date" min="" name="toDoDueDate" id="edit-todo-due-date" required />
      <input class="edit-form__item edit-form__item--submit" type="submit" id="edit-todo-submit" value="Go" />
    </form>`;

    const toDoContentInput: HTMLElement = document.querySelector(`#edit-todo-content`);
    const toDoStatusSelect: HTMLSelectElement = document.querySelector(`#edit-todo-status`);
    const toDoDueDateInput: HTMLElement = document.querySelector(`#edit-todo-due-date`);
    toDoDueDateInput.addEventListener('click', ev => onlyFutureToDos(ev));


    const editToDoForm: HTMLFormElement = document.querySelector(`.edit-form`);
    
    toDoContentInput.setAttribute('value',toDoContentDiv.innerText);
    toDoStatusSelect.selectedIndex = Array.from(toDoStatusSelect.children).findIndex(child => child.getAttribute('value') === toDoStatusDiv.innerText);
    toDoDueDateInput.setAttribute('value',new Date(Date.parse(toDoDueDateDiv.innerHTML)+clientTimezoneOffset).toISOString().substring(0, 10));
    
    editToDoForm.setAttribute('id',`${toDoDiv.getAttribute('id')}-edit-form`)

    return editToDoForm;

  } catch (er) {
    console.error(er);
  }
}
