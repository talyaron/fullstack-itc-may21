/*let myVar = setInterval(myTimer,1000)

function myTimer(){
    let i:number = 0;
    i++
    console.log(i)
    
}

function myStopFunction(){
    clearInterval(myVar);
}*/
function countDown() {
    var i = 5;
    var myinterval = setInterval(function () {
        document.getElementById("displayDiv").innerHTML = "Number: " + i;
        if (i === 0) {
            console.log('terminooo');
            clearInterval(myinterval);
        }
        else {
            i--;
        }
    }, 500);
}
