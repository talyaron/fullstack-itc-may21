
/*  Questions and doubts: 
1)How can I solve the problem add a new employe when you don't write anything in each input, now you can add employes without information
2)How can I solve comunications with the client user when he want to edit each employe, I used try catch throw new error to stop editing if you don't put info in each input, but I want to pass the info from the de dom into the modal edit so the client don't need to add again each inputs
3)Also I need one or two session to recap the routes, controllers and promises

*/



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


let currentId;
function updateEmploye(id){
 currentId = id;
}
async function handleEdit(event){
    event.preventDefault();
    try{
	
		
		
    let id = currentId;
    const nameEdit = document.querySelector('#name').value;
    const emailEdit = document.querySelector('#email').value;
    const addressEdit = document.querySelector('#address').value;
	const phoneEdit = document.querySelector('#phone').value;
    const updateEmploye = {nameEdit, emailEdit, addressEdit, phoneEdit, id} 
	if(nameEdit==="" || emailEdit==="" || addressEdit==="" || phoneEdit==="") throw new Error('Data not completed')



	console.log(updateEmploye);

	const employeData = await axios.put(`/updateEmployes`, updateEmploye );
	event.target.reset()
	render(employeData.data);
	if($("#aditEmployeeModal")){
		$("#editEmployeeModal").modal("hide") 

		alert('You editted all info correctly')

	}

	
	} catch (error) {
			console.error(error);
		}
    
}

