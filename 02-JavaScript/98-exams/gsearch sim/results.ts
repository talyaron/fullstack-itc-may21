function showOnDOM() {
    const allOfSrchs = JSON.parse(localStorage.getItem('Allsrchs'));
    console.log(allOfSrchs);
    const lastUserSrchIndex = allOfSrchs.length - 1;
    const lastUser = allOfSrchs[lastUserSrchIndex];
    const data: HTMLElement = document.querySelector(".data");
    // data.innerHTML = `<div>Hi John Doe, welcome to G-search. You were searching for ${lastUser.text}. Here are your results:</div>`;
    data.insertAdjacentHTML('beforeend', `<div>Hi John Doe, welcome to G-search. You were searching for "${lastUser.text}". Here are your results:</div>`);

    // });

}

showOnDOM();


//search hard coded data and see if the last user input matches any or part of it: