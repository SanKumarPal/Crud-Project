var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm;

}

function readFormData(){
    var formData = {};
    formData["name"] =document.getElementById("name").value;
    formData["email"] =document.getElementById("email").value;
    formData["phone"] =document.getElementById("phone").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("ki").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.phone;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = "<button onclick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>"
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;

}

function onDelete(td){
     if(confirm("Do you want to delete this record ? ")){
        row = td.parentElement.parentElement;
        document.getElementById("ki").deleteRow(row.rowIndex);
     }
     resetForm();
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
