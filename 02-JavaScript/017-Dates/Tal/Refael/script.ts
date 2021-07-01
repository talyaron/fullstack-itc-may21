//calculate

const firstDate = new Date();
const secondDate = new Date("1-jun-2020");

const datesToDays = (firstDate: Date, secondDate: Date) => {
  console.log(firstDate, secondDate);
  const date1 = firstDate.getTime();
  const date2 = secondDate.getTime();
  const difference = Math.ceil((date1 - date2) / (1000 * 60 * 60 * 24));
  return difference;
};
console.log(datesToDays(firstDate, secondDate));
const difference = datesToDays(firstDate, secondDate);

const DATE = document.querySelector(".print");
DATE.innerHTML = difference;
