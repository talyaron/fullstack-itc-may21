interface Sticks {
  company: string;
  size: any;
  amount: number;
}

let sticks: Array<Sticks> = [
  {
    company: "Ziljian",
    size: "5A",
    amount: 30,
  },
  {
    company: "Vic Firth",
    size: "7A",
    amount: 10,
  },
  {
    company: "Blocks",
    size: "5B",
    amount: 3,
  },
];

sticks.forEach((sticks) => {
  console.log(sticks.amount);
});

const SticksAmountForDOM = sticks
  .map(
    (Sticks) =>
      `<p>${Sticks.company} company has ${Sticks.amount} sticks in inventory</p>`
  )
  .join(" ");
console.log(SticksAmountForDOM);

const dom = document.querySelector(".dom");
dom.innerHTML = SticksAmountForDOM;

const SticksCompaniesForDOM = sticks
  .map(
    (Sticks) =>
      `<p>${Sticks.company} has ${Sticks.amount} sticks in inventory </p>`
  )
  .join(" ");
console.log(SticksAmountForDOM);

// const dom = document.querySelector(".dom");
dom.innerHTML = SticksAmountForDOM;
