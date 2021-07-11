/* Exam-JS:
create a two-page application. the application is used to order people into small groups, in random order.
On the first page, the user will add people (name and image). The list of people will be shown in this page. the user can delete any person from this page.
the user will also enter the number of people in each group.


On the second page, the people will be shown in groups (according to the number set by the user on the first page). every time the page will be reloaded, new random groups will be generated. The groups should be ordered in a column if on mobile (up to 500 px), in 2 columns in tablet (750 px) and 3 columns on screens bigger than 750px;
*/

//Get color from storage and apply on the boxes:
const chosenColor: string = JSON.parse(localStorage.getItem("Chosen color"));
const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  div.style.backgroundColor = chosenColor;
  div.style.border = "1px solid rgba(0, 0, 0, 0.63)";
});

//Go back to main page:
function handleGoBack(event: Event): void {
  window.location.href = "../index/index.html";
}
