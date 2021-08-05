//Get the employes information:
async function getAllEmployes() {
    try {
        const employesData = await axios.get('/getEmployes');
        render(employesData.data);
    } catch (error) {
        console.log(error);
    }
};

//render
function render(array) {
	if($("#addEmployeeModal")){
		$("#addEmployeeModal").modal("hide") 
		
		//se agrega si esta vacio, modificarlo!!
	}

	const root = document.querySelector(".root");
	let html = "";

	if (array && array.length > 0) {


			html += `<table class="table table-striped table-hover">
		<thead>
			<tr>
				<th>
				
				</th>
				<th>Name</th>
				<th>Email</th>
				<th>Address</th>
				<th>Phone</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>`

		array.forEach((elem) => {

			const {
				name,
				email,
				address,
				phone,
				id
			} = elem
			
			html += `<tr>
			<td></td>
			<td>${name}</td>
			<td>${email}</td>
			<td>${address}</td>
			<td>${phone}</td>
			<td>
				<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit"  onclick='updateEmploye("${id}")' >&#xE254;</i></a>
				<i class="material-icons" data-toggle="tooltip" title="Delete"  onclick='deleteEmploye("${id}")' style="cursor:pointer">&#xE872;</i>
			</td>
		</tr>`
		});

		html += `</tbody></table>`

	 }
	
	else {
	 	let	html = ""
	 }
	root.innerHTML = html;
	

}


render();


//POST
function handleSubmit(event) {
	event.preventDefault();
	

	let {
		name,
		email,
		address,
		phone
		
	} = event.target.elements;
	name = name.value;
	email = email.value;
	address = address.value;
	phone = phone.value;

	if(name !== "" || email !== ""|| address !== "" || phone !==""){
		
	

	axios({
		method: "post",
		url: `/addEmployes`,
		data: {
					name,
			 		email,
			 		address,
			 		phone
		},
		headers: {
		  "Content-Type": "application/json",
		},
	  })
	  	
		.then(({ data: { allEmployes } }) => render(allEmployes))
		.then(() => event.target.reset());
	} else{
		alert('You need to complete at least one field')
	}

	
	}


	async function deleteEmploye (id) {
		try {
			const option = confirm(`Are you sure do you want to delete this employe?`);
			if (option) {
				const employeData = await axios.delete(`/deleteEmployes/${id}`);
				render(employeData.data.allEmployes);
			}
		} catch (error) {
			console.error(error);
		}
	};



//UPDATE

 function updateEmploye (id){
	 
 }



// function updateEmploye(personId) {
// 	const newName = document.getElementById(`${personId}name`).value;
// 	axios.put('/updateEmploye', {
// 			id: personId,
// 			name: newName
// 		})
// 		.then(res => {
// 			console.log(res.data.message)
// 			render(res.array.allEmployes)
		
// 		})
// }

// function handleEdit(event){
// 	event.preventDefault()





// 	updateEmploye()


// }

