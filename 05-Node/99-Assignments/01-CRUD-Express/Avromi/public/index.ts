createSortable("divcont");
function createSortable(selector) {
  var newY,sortable=document.getElementById(selector);
  Draggable.create(sortable.children, {
    type:"y",bounds:"#divcont",
    onPress: function() { newY = this.y },
    onDragEnd: function() {
      var i =(sortable.children).length , dragIndex ,
      targetIndex = $.inArray(this.target,sortable.children);
      while (--i>-1){
        if (this.hitTest(sortable.children[i],"10%")){
          TweenLite.to(sortable.children[i], 0.2, { y: newY });
          dropIndex = i;}
      }      
      if (typeof dropIndex !== "undefined") {
        dragIndex = targetIndex < dropIndex ? dropIndex + 1: dropIndex;
        sortable.insertBefore(sortable.children[dropIndex],sortable.children[targetIndex]);
        sortable.insertBefore(this.target,sortable.children[dragIndex]) }   
    }
    ,liveSnap: true,snap:function(endValue){ return Math.round(endValue/40)*40}
  });
  TweenLite.set(sortable,{height:40*sortable.children.length});
  for(var i=0;i<sortable.children.length;i++){ TweenLite.set(sortable.children[i],{y:40*i})}
}

// const title = "new title"

async function addTask(title) {
    try {
        const res = await axios.post('/tasks/newTask', { title })
      const allTasks = res.data
      console.log(allTasks);
    } catch (error) {
        console.log(error);
    }

}



const form = document.querySelector(".main__form")
form.addEventListener('submit', handleSubmit);

function handleSubmit(ev:any):any{
    ev.preventDefault();
    const task = ev.target.elements.task.value;
    addTask(task)

    ev.target.reset();
}




