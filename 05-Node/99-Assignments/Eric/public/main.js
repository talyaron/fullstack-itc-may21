$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});


//Get
axios.get('/getEmployes')
.then(res=>{
    console.log(employes)
    //renderData(res.data.employes)
})

  //POST
  function handleSubmit(ev){
	ev.preventDefault();
	let {name, email, address, phone} = ev.target.elements;
	name = name.value;
	email = email.value;
	address = address.value;
	phone = phone.value;
	ev.target.reset();
	axios.post('/addEmployes',{name, email, address, phone})
	//.then(res=>renderData(res.data.students))
}

	//DELETE
	function deleteRecord(personId){
	axios.post('/deleteEmploye',{id:personId})
	.then(res=>{
		console.log(employes)
		//renderData(res.data.students)
			})
}

 //UPDATE
 function updateEmploye(personId){
	const newName = document.getElementById(`${personId}name`).value;
	console.dir(newName)
	axios.put('/updateEmploye',{id:personId, name:newName})
	.then(res=>{
		console.log(res.data.message)
		renderData(res.data.allEmployes)
	})
}