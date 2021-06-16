let runningTotal: number = 0;


const userName: string = document.querySelector("#userName");
const depositString: string = document.querySelector("#deposit");
const withdrawalString: string = document.querySelector("#withdrawal");
const submitButton: any = document.querySelector("#submit");

submitButton.addEventListener("click", inputChecker);

function inputChecker ():void {
    if (userName.value === "" && depositString.value === "" && withdrawalString.value === "") 
        window.alert("You must fill in a name and either a deposit or a withdrawal");
        else if
        (userName.value === "" && (depositString.value !== "" || withdrawalString.value !== ""))
        window.alert("You must give a username");
        else if (userName.value !== "" && depositString.value !== "" && withdrawalString.value !== "") 
    window.alert("You can only submit either a deposit or a withdrawal");
        else 
    handleSubmit(); 
}

function handleSubmit(ev: any): void {
  const intDeposit = parseInt(depositString);
  const intWithdrawal = parseInt(withdrawalString);
let newAccount = new Account(userName, intDeposit, intWithdrawal);
newAccount.depositMoney;
newAccount.withdrawMoney;
newAccount.giveAccountDetails;
}

// This is the class for the account. It has three methods: depositmoney, withdrawMoney, and giveAccountdetails. I'm defining all the inputs as integers

class Account {
  userName: string;
  intDeposit: number;
  intWithdrawal: number;
  constructor(userName: string, intDeposit: number, intWithdrawal: number) {
    this.userName = userName;
    this.intDeposit = intDeposit;
    this.intWithdrawal = intWithdrawal;
  }
  depositMoney(intDeposit: number) {
    runningTotal =+ this.intDeposit;
  }
  withdrawMoney(intWithdrawal: number) {
    
    runningTotal =- this.intWithdrawal;
  }
  giveAccountDetails() {
    console.log(
      `The amount of money in your account is $${runningTotal}`
    );
  }


