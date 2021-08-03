$(document).ready(function () {
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Select/Deselect checkboxes
	const checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function () {
		if (this.checked) {
			checkbox.each(function () {
				this.checked = true;
			});
		} else {
			checkbox.each(function () {
				this.checked = false;
			});
		}
	});
	checkbox.click(function () {
		if (!this.checked) {
			$("#selectAll").prop("checked", false);
		}
	});
});





//Get meter function
axios.get('/getEmployes')
	.then(res => {
		console.log(employes)
		render(res.array.allEemployes)
	})


//render
function render(array) {
	let html = "";
	const list = document.getElementById("root");

	if (array.length > 0) {


			html += `<table class="table table-striped table-hover">
		<thead>
			<tr>
				<th>
					<span class="custom-checkbox">
						<input type="checkbox" id="selectAll">
						<label for="selectAll"></label>
					</span>
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
				phone
			} = elem
			
			html += `<tr>
			<td>
				<span class="custom-checkbox">
					<input type="checkbox" id="checkbox1" name="options[]" value="1">
					<label for="checkbox1"></label>
				</span>
			</td>
			<td>${name}</td>
			<td>${email}</td>
			<td>${address}</td>
			<td>${phone}</td>
			<td>
				<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
				<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
			</td>
		</tr>
		
	</tbody>
</table>`
		});

		html += `</tbody></table>`

	} else {
		html += ""
	}
	list.innerHTML = html;

}


render();


//POST
function handleSubmit(ev) {
	ev.preventDefault();
	let {
		name,
		email,
		address,
		phone
	} = ev.target.elements;
	name = name.value;
	email = email.value;
	address = address.value;
	phone = phone.value;
	ev.target.reset();
	axios.post('/addEmployes', {
			name,
			email,
			address,
			phone
		})
		.then(res => render(res.array.allEemployes))
}

//DELETE
function deleteRecord(personId) {
	axios.post('/deleteEmploye', {
			id: personId
		})
		.then(res => {
			console.log(employes)
			render(res.array.allEmployes)
		})
}

//UPDATE
function updateEmploye(personId) {
	const newName = document.getElementById(`${personId}name`).value;
	console.dir(newName)
	axios.put('/updateEmploye', {
			id: personId,
			name: newName
		})
		.then(res => {
			console.log(res.data.message)
			render(res.array.allEmployes)
		})
}