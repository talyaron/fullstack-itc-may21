getData(null, null);

const newToDoform: HTMLFormElement = document.querySelector('#todos-form');
const searchToDosform: HTMLFormElement = document.querySelector('#search-todos-form');
const resetBtn: HTMLElement = document.querySelector('#reset');
// sorting should be on client side for quick response + not change the database order
const toDoTimeInput: HTMLElement = document.querySelector(`#todo-due-date`);


newToDoform.addEventListener('submit', ev => handleNewToDo(ev));
searchToDosform.addEventListener('keyup', ev => handleToDoSearch(ev));
resetBtn.addEventListener('click', ev => handleReset(ev));
toDoTimeInput.addEventListener('click', ev => onlyFutureToDos(ev));

const onlyFutureToDos = (ev): void => {
  try {
    const now: Date = new Date();
    ev.target.setAttribute("min", now.toISOString().substring(0, 16));

  } catch (error) {
    console.error(error);
  }
};

async function handleNewToDo(ev) {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const content: string = formElements.toDoContent.value;
    const dueDate: number = Date.parse(formElements.toDoDueDate.value);

    const toDo = { content, status: 'Pending...', dueDate };

    await postToDo(toDo);
    await getData(null, null);

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

function handleToDoSearch(ev) {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const content: string = formElements.toDoContent.value;
    const status: string = formElements.toDoStatus.value;

    if ((content === '') && (status === '')) return;

    getData(content, status);
    resetBtn.style.display = 'unset';

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

async function getData(toDoContent: string, toDoStatus: string): Promise<any> {
  const dataToFetch: any = ((!toDoContent) && (!toDoStatus)) ? await getToDos() : await searchToDos(toDoContent, toDoStatus);

  renderData(dataToFetch);
}

function renderData(dataToRender: any): void {
  try {
    const upcomingRoot: HTMLElement = document.querySelector(".upcoming");
    const laterRoot: HTMLElement = document.querySelector(".later");

    const dateInThirtyDays = new Date();
    dateInThirtyDays.setDate(dateInThirtyDays.getDate() + 30);
    const options: object = {day: 'numeric', month: 'short'  };
    const upcomingLimit: string = dateInThirtyDays.toLocaleDateString('en-US', options);

    let upcomingHtml: string = `<h2 class="upcoming__item upcoming__item--header">Todos due up to ${upcomingLimit}</h2>`;
    let laterHtml: string = `<h2 class="later__item later__item--header">Todos due after ${upcomingLimit}</h2>`;

    upcomingRoot.innerHTML = upcomingHtml;
    laterRoot.innerHTML = laterHtml;

    if (typeof dataToRender.data === "string") {
      upcomingRoot.innerHTML = `<h3>${dataToRender.data}</h3>`;
      return;
    }

    const now: number = Date.now();

    dataToRender.data.forEach((toDo) => {
      if (((toDo.dueDate - now) * (1000 * 60 * 60 * 24)) < 30) {
        upcomingHtml += 
        `<div class="upcoming__item todo" id="${toDo.uuid}">
          <div class="todo__item todo__item--content">${toDo.content}</div>
          <div class="todo__item todo__item--status">${toDo.status}</div>
          <div class="todo__item todo__item--due-date">${toDo.dueDate}</div>
          <button class="todo__item todo__item--edit"><i class="fa fa-edit"></i>div>
          <button class="todo__item todo__item--delete"><i class="fa fa-remove"></i>div>
        </div>`;
      }
      else {
        laterHtml += 
        `<div class="later__item todo" id="${toDo.uuid}">
          <div class="todo__item todo__item--content">${toDo.content}</div>
          <div class="todo__item todo__item--status">${toDo.status}</div>
          <div class="todo__item todo__item--due-date">${toDo.dueDate}</div>
          <button class="todo__item todo__item--edit"><i class="fa fa-edit"></i>div>
          <button class="todo__item todo__item--delete"><i class="fa fa-remove"></i>div>
        </div>`;
      }
    });

    upcomingRoot.innerHTML = upcomingHtml;
    laterRoot.innerHTML = laterHtml;
    
  } catch (error) {
    console.error(error);
}
}

function handleReset(ev) {
  try {
    ev.preventDefault();

    getData(null, null);
    resetBtn.style.display = 'none';

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}