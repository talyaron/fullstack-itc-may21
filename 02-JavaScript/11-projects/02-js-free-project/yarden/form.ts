    const date = document.querySelector('#date').getAttribute('value')
    const expedition = document.querySelector('#expedition')

    const chosenDate = localStorage.getItem('date')
    const chosenExpedition = localStorage.getItem('expedition')
        
    document.querySelector('#date').setAttribute('value', chosenDate)
    
    //Match selected expedition with the form Select element Option:
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