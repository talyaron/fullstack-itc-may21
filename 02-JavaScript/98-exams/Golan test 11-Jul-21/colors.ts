function showOnDOM() {
    const allOfPpl = JSON.parse(localStorage.getItem('AllPpl'));
    const lastUserIndex = allOfPpl.length - 1;
    const lastUser = allOfPpl[lastUserIndex];
    const data: HTMLElement = document.querySelector(".wrpr__submitted-grps--ppl");
    data.insertAdjacentHTML('beforeend', `<div>${lastUser.name}'s favorite color is "${lastUser.color}" and was added to the list. <div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div><div class="wrpr__submitted-grps--color" style="background-color:${lastUser.color}">${lastUser.name}</div>`);





  

  
}

showOnDOM();