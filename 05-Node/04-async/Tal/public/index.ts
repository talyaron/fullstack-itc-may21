interface Student{
    name:string, 
    grade:number
}


async function getInfo(){
    // console.time('students')
    // fetch('/getData')
    // .then(r=>r.json())
    // .then(students=>{
    //     console.log(students);
    //     console.timeEnd('students')
    //     renderStudents(students);
        
    //     //callback hell (or promise hell)
    //     console.time('joke')
    //     fetch('https://api.chucknorris.io/jokes/random')
    //     .then(r=>r.json())
    //     .then(joke=>{
    //         console.log(joke.value);
           
    //        console.timeEnd('joke');
    //     })
       
    // })

   const r = await fetch('/getData');
   console.log('waited')
   const students = await r.json();
   console.log(students);

   const r2 = await fetch('https://api.chucknorris.io/jokes/random')
   const joke = await r2.json();
   console.log(joke.value);


  

    console.log('after fetch')


}

//redner to the DOM

getInfo();

function renderStudents(data){
    console.log(data)
    let html = '';
    data.forEach(student=>{
        html += `<p>${student.name}</p>`
    })

    document.getElementById('root').innerHTML = html;
}

// renderStudents(students);