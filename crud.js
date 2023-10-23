//global variable
var selectedRow = null;

function showExternalAlert()
{
	alert("My first external javascript!");
}


function addRow()
{
	var ownerName = $('#addOwner-name').val();
	var petName = $('#addPet-name').val();
	var petType = $('#addPet-type').val();
	
	var petServices = $('#addPet-services option:selected').text();
	var instructions = $('#addInstructions').val();
	
	console.log(ownerName);
	console.log(petName);
	console.log(petType);
	console.log(petServices);
	console.log(instructions);
	
	
	var newRow = '<tr>' +
					'<td>' + ownerName + '</td>' +
					'<td>' + petName + '</td>' +
					'<td>' + petType + '</td>' +
					'<td>' + petServices + '</td>' +
					'<td>' + instructions + '</td>' +
					'<td><button class="btn btn-info" value= "edit" onClick = "editRow(this);">Edit</button></td>' +
					'<td><button class="btn btn-danger" onClick = "rowDelete(this);">Delete</button> </td>' +
				'</tr>';
	
	var tableBody = $('#pet-table tbody');
	tableBody.append(newRow);
	
	$('#addModal').modal('hide');
	
	clearAll();
	
}

function editRow(ctl) {
	$('#editModal').modal('show');
    selectedRow = $(ctl).parents("tr");
    var cols = selectedRow.children("td");
    $("#editOwner-name").val($(cols[0]).text());
    $("#editPet-name").val($(cols[1]).text());
    $("#editPet-type").val($(cols[2]).text());
    $("#editPet-services option:selected").val($(cols[3]).text());
    $("#editInstructions").val($(cols[4]).text());

}

function editedRow(id) {

	var nRow = "<tr>" +
        "<td>" + $("#editOwner-name").val() + "</td>" +
        "<td>" + $("#editPet-name").val() + "</td>" +
        "<td>" + $("#editPet-type").val() + "</td>" +
        "<td>" + $("#editPet-services option:selected").text() + "</td>" +
        "<td>" + $("#editInstructions").val() + "</td>" +
        '<td><button class="btn btn-info" value = "Edit" onClick = "editRow(this)">Edit</button></td>' +
        '<td><button class="btn btn-danger"  value = "Delete" onclick = "rowDelete(this);">Delete</button></td>' +
        "</tr>"

    return nRow;

}

function saveChanges() {
    $(selectedRow).after(editedRow());
    $(selectedRow).remove();
    formClear();
}

function rowDelete(td)
{
	if (confirm('Are you sure you want to delete this record?')) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById("pet-table").deleteRow(selectedRow.rowIndex);
	}
}



function clearAll()
{
	$('#addOwner-name').val('');
	$('#addPet-name').val('');
	$('#addPet-type').val('');	
	$('#addPet-services').prop("selectedIndex",0);
	$('#addInstructions').val('');
	
} 