function difference(date1:Date, date2: Date) {
    try {

        const differenceTime = Math.abs(date2 - date1);
        const differenceDays = Math.ceil(differenceTime / (1000 * 60 * 60 * 24)); 
        const days = ("The difference is " + differenceDays + " days");
        return days

    } catch (error) {
        
    }
}
const chosenDate1 = new Date ('01-aug-2021') 
const chosenDate2 = new Date ('11-sep-2022') 

console.log(difference(chosenDate1, chosenDate2));

const root = document.querySelector('.root')
root.innerHTML += difference(chosenDate1, chosenDate2)