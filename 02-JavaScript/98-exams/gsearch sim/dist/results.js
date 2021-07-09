function showOnDOM() {
    var allOfSrchs = JSON.parse(localStorage.getItem('Allsrchs'));
    console.log(allOfSrchs);
    var lastUserSrchIndex = allOfSrchs.length - 1;
    var lastUser = allOfSrchs[lastUserSrchIndex];
    var data = document.querySelector(".data");
    // data.innerHTML = `<div>Hi John Doe, welcome to G-search. You were searching for ${lastUser.text}. Here are your results:</div>`;
    data.insertAdjacentHTML('beforeend', "<div>Hi John Doe, welcome to G-search. You were searching for \"" + lastUser.text + "\". Here are your results:</div>");
    // });
}
showOnDOM();
//search hard coded data and see if the last user input matches any or part of it:
