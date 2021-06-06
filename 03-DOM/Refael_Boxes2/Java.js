const container = document.querySelector(".container");
console.log(container); //YS: Don't leave console.log/console.dir in your code.

const boxes = () => {
  try {
    if (randomNum === 0 || randomNum > 10)
      throw new Error("Number of boxes is incorrect!");    //YS: Very nice error handling!
    let random = randomNum();
    for (let i = 0; i < random; i++) {
      const myDiv = document.createElement("div");
      myDiv.style.position = "relative";
      myDiv.style.backgroundColor = randomColor();
      myDiv.style.width = randomSize();
      myDiv.style.height = randomSize();
      myDiv.style.left = randomPositionLeft();
      myDiv.style.top = randomPositionTop();
      container.appendChild(myDiv);
      console.dir(myDiv);  //YS: Don't leave console.log/console.dir in your code. 
    }
  } catch (error) {
    console.log(error);
  }
};
setInterval(function () {
                                                /* Ok, this is a workaround. It is usually not the ideal solution to refresh the page. The part that you were missing 
                                                was clearing the container of your previous boxes before appending the new boxes. Remember that when you do  
                                                <element.innerHTML=> it replaces the HTML inside. In most real world cases you wont want to replace the HTML but append it like you did,
                                                but for this assignment specifically it was necessary to clear it. Since you did it the second way, you first have to clear the container
                                                by doing <container.innerHTML=''> (the inner HTML of the container is empty/blank);  This will first clear the console and then you 
                                                can append myDiv.   */
  document.location.reload();                   
}, 5000);

/*setInterval(function () {
  container.innerHTML = '';   
  boxes();                 
 }, 5000); */



boxes();  //YS: boxes() should be called in the setInterval not here. 


