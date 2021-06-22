var date = document.querySelector('#date').getAttribute('value');
var expedition = document.querySelector('#expedition');
var chosenDate = localStorage.getItem('date');
var chosenExpedition = localStorage.getItem('expedition');
document.querySelector('#date').setAttribute('value', chosenDate);
//Match selected expedition with the form Select element Option:
var selectExpedition = function () {
    try {
        if (chosenExpedition === 'Mars Expedition') {
            expedition[0].selected = 'selected';
        }
        else if (chosenExpedition === 'Venus Expedition') {
            expedition[1].selected = 'selected';
        }
        else if (chosenExpedition === 'Moon Expedition') {
            expedition[2].selected = 'selected';
        }
    }
    catch (error) {
        console.error(error);
    }
};
selectExpedition();
