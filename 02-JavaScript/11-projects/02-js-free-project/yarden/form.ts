console.log('***The errors are caused by the Youtube embed for some reason. After a lot of effort I decided to skip solving these and leave the iframe as is!***');

//Select the locations to insert the data collected at the Homepage:
    const date = document.querySelector('#date').getAttribute('value')
    const expedition = document.querySelector('#expedition')
//Insert the data from the Homepage:
    const chosenDate = localStorage.getItem('date')
    const chosenExpedition = localStorage.getItem('expedition')        
    document.querySelector('#date').setAttribute('value', chosenDate)
    const selectExpedition = () => {
        try {
            if (chosenExpedition === 'Mars Expedition') {
                expedition[0].selected = 'selected'
            }
            else if (chosenExpedition === 'Venus Expedition') {
                expedition[1].selected = 'selected'
            }
            else if (chosenExpedition === 'Moon Expedition') {
                expedition[2].selected = 'selected'
            }   
        } catch (error) {
            console.error(error);
            
    }
}
selectExpedition()

//The user class for the expedition form:
class Participant {
    name:string
    date:Date
    planet:string
    isCertified:Boolean

    constructor(name:string, date:Date, planet:string, isCertified:Boolean) {
        this.name = name
        this.date = date
        this.planet = planet
        this.isCertified = isCertified
    }
}   
//An array listing the participants booked:
let participants:Array<Participant> = []

//Handle submit event for the form:
const handleSubmit = (event:any)=> {
    try {    
        event.preventDefault();
        //prepare the input as paramaters for the Participant Class:
        const name = event.target.elements.name.value;
        const date = event.target.elements.date.value;
        const expedition = event.target.elements.expedition.value;
        const isCertified = event.target.elements.isCertified.checked;        
        //Add participant to the participants array:
        participants.push(new Participant(name, date, expedition, isCertified));
        console.log(participants);
        alert(`Thank you, ${name}!`)

} 
     catch (error) {
        console.error(error)
    }
}
