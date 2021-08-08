getData(null, null);

const addToDoForm: HTMLFormElement = document.querySelector('#add-todo-form');
const searchToDosForm: HTMLFormElement = document.querySelector('#search-todos-form');
const searchToDosContentInput: HTMLElement = document.querySelector('#search-todos-content');
const searchToDosStatusSelect: HTMLElement = document.querySelector('#search-todos-status');
const editToDosAncestor: HTMLElement = document.querySelector('.todos');
let editToDosform: HTMLFormElement;
const resetBtn: HTMLElement = document.querySelector('#reset');
// sorting should be on client side for quick response + not change the database order
// sort onclick on todo table header (status/due date. no need to sort be content)
const addToDoTimeInput: HTMLInputElement = document.querySelector(`#add-todo-due-date`);

interface ToDo {
  content: string;
  status: string;
  dueDate: any;
  uuid: string;
  createdDate: any;
  editedDate: any;
}

class ToDos {
  toDoList: Array<ToDo>;

  constructor (toDoList: Array<ToDo>) {
    this.toDoList = toDoList;
  }

  renderToDos(): void {
    try {
      const upcomingRoot: HTMLElement = document.querySelector(".upcoming");
      const laterRoot: HTMLElement = document.querySelector(".later");

      const dateInThirtyDays: Date = new Date();
      dateInThirtyDays.setDate(dateInThirtyDays.getDate() + 30);
      let options: object = {day: 'numeric', month: 'long'  };
      const upcomingLimit: string = dateInThirtyDays.toLocaleDateString('en-US', options);

      for (let i = 0; i < searchToDosForm.children.length; i++) {
        searchToDosForm.children[i].disabled = false;
      }

      let upcomingHtml: string = `<h2 class="upcoming__item upcoming__item--header upcoming__item--header-upcoming">Up to ${upcomingLimit}</h2>`;
      let laterHtml: string = `<h2 class="later__item later__item--header later__item--header-later">After ${upcomingLimit}</h2>`;

      upcomingRoot.innerHTML = upcomingHtml;
      laterRoot.innerHTML = laterHtml;

      this.toDoList = this.toDoList.sort((a: ToDo, b: ToDo) => Date.parse(a.dueDate) - Date.parse(b.dueDate));
      this.toDoList = this.toDoList.sort((a: ToDo, b: ToDo) => {
        const aId = a.status;
        const bId = b.status;
        if (aId > bId) {return -1;}
        if (aId < bId) {return 1;}
        return 0;
      });

      this.toDoList.forEach((toDo: ToDo): void => {
        const toDoDueDate: Date = new Date(toDo.dueDate);
        options = {day: 'numeric', month: 'short', year: 'numeric'  };
        const toDoDueDateString: string = toDoDueDate.toLocaleDateString('en-US', options); //YS: Nice, you can also use a library called moment which does this automatically. 
    

        let statusClass: string = ''; //YS: Good! 
        switch (toDo.status) {
          case 'Pending...':
            statusClass = 'todo__item--status-pending';
          break;
          case 'Done':
            statusClass = 'todo__item--status-done';
          break;
          case 'In progress...':
            statusClass = 'todo__item--status-in-progress';
          break;
          case 'Stuck':
            statusClass = 'todo__item--status-stuck';
          break;
        }

        const now: number = Date.now();
        const toDoDueDateNumber: number = toDoDueDate.getTime();
        const toDays: number = (1000 * 60 * 60 * 24);
        const inHowManyDays: number = (toDoDueDateNumber - now) / toDays;

        if ( inHowManyDays < 30) {
          let dueDateClass: string = '';
          if (inHowManyDays < 8) {
            dueDateClass = (inHowManyDays > 0) ? ' todo__item--due-date-soon' : ' todo__item--due-date-passed';
          }

          upcomingHtml += 
          `<div class="upcoming__item upcoming__item--upcoming todo" id="${toDo.uuid}">
            <div class="todo__item todo__item--content">${toDo.content}</div>
            <div class="todo__item todo__item--status ${statusClass}">${toDo.status}</div>
            <div class="todo__item todo__item--due-date${dueDateClass}">${toDoDueDateString}</div>
            <div class="todo__item todo__item--delete"><i class="fa fa-trash"></i></div>
          </div>`;
        }
        else {
          laterHtml += 
          `<div class="later__item later__item--later todo" id="${toDo.uuid}">
            <div class="todo__item todo__item--content">${toDo.content}</div>
            <div class="todo__item todo__item--status ${statusClass}">${toDo.status}</div>
            <div class="todo__item todo__item--due-date">${toDoDueDateString}</div>
            <div class="todo__item todo__item--delete"><i class="fa fa-trash"></i></div>
          </div>`;
        }
      });

      upcomingRoot.innerHTML = upcomingHtml;
      laterRoot.innerHTML = laterHtml;
      
    } catch (error) {
      console.error(error);
    }
  }
}

addToDoForm.addEventListener('submit', ev => handleAddToDo(ev));
searchToDosContentInput.addEventListener('keyup', ev => handleSearchToDo(ev));
searchToDosStatusSelect.addEventListener('change', ev => handleSearchToDo(ev));
editToDosAncestor.addEventListener('click', ev => handleClickedToDo(ev));
resetBtn.addEventListener('click', ev => handleReset(ev));
addToDoTimeInput.addEventListener('click', ev => onlyFutureToDos(ev));

const handleAddToDo = async (ev: any): Promise<void> => { //YS: You can add some message for the client saying "Todo added successfully or something"
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const content: string = formElements.toDoContent.value;
    const dueDate: any = new Date(formElements.toDoDueDate.value);

    const toDo: ToDo = { content, status: 'Pending...', dueDate, uuid: null, createdDate: new Date(), editedDate: null};

    await postToDo(toDo); //YS: Very nice
    await getData(null, null); 

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

const handleSearchToDo =  (ev: any): void => {
  try {
    const formElements = ev.target.parentElement.elements;

    const content: string = formElements.toDoContent.value;
    const status: string = formElements.toDoStatus.value;

    if ((content === '') && (status === '')) return;

    getData(content, status);
    resetBtn.style.display = 'unset';

  } catch (error) {
    console.error(error);
  }
}

const handleEditToDo = async (ev: any): Promise<void> => {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const uuid: string = ev.target.getAttribute("id").replace('-edit-form',''); /* YS: Ok, that is one way to do it, but we usually dont keep the info in the HTML.
                                                                                    You should add the eventListener when creating the HTML dynamically (renderToDos)
                                                                                    and then you should pass the id as a parameter */
    const content: string = formElements.toDoContent.value;
    const status: any = formElements.toDoStatus.value;
    const dueDate: any = new Date(formElements.toDoDueDate.value);

    const toDo: ToDo = { content, status, dueDate, uuid, createdDate: null, editedDate: new Date()};

    await putToDo(toDo);
    await getData(null, null);

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

const handleDeleteToDo = async (ev: any): Promise<void> => {
  try {
    const toDoAnsestor: HTMLElement = (ev.target.className === 'fa fa-trash') ? ev.target.parentElement.parentElement : ev.target.parentElement;
    const uuid: string = toDoAnsestor.getAttribute("id"); //YS: Same as in the edit, 
    
    await deleteToDo(uuid);
    await getData(null, null);

  } catch (error) {
    console.error(error);
  }
}

const handleReset =  (ev: any): void => {
  try {
    getData(null, null);
    resetBtn.style.display = 'none';

  } catch (error) {
    console.error(error);
  }
}