var btnSearch = document.querySelector('.container__header__right__search--gray-color');
var inputSearch = document.querySelector('#filtermsg');
btnSearch.addEventListener('click', displayInput); //why the first one does not appear
function displayInput() {
    if (inputSearch.style.display === 'none') {
        inputSearch.style.display = 'inline-block';
        inputSearch.style.outline = "none";
        inputSearch.style.textIndent = "0.2rem";
    }
    else {
        inputSearch.style.display = 'none';
        inputSearch.value = "";
    }
}
