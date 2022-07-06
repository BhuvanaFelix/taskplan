//Display current date
let currentDate = new Date()
let yyyy = currentDate.getFullYear();
let mm = currentDate.getMonth() + 1;
let dd = currentDate.getDate();
currentDate = dd + '/' + mm + '/' + yyyy;
document.getElementById('current_date').innerHTML = currentDate;

const myvalidate = (obj) => {

    if (obj.value == "" || obj.value.length < 8)
        obj.classList.add("is-invalid");
    else
        obj.classList.remove("is-invalid");

}

saveBtn.addEventListener('click', (event) => {
    //const validateTaskForm = () => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let formAssigned = document.getElementById("formAssigned");
    let dueDate = document.getElementById("date").value;
    let status = document.getElementById("status");
    let theDate = new Date().getTime();
    let anotherDate = new Date(document.getElementById("date").value).getTime();
    //Validate Name 
    if (name === "" || name.length < 8 || name == null) {
        let text = "Enter name with more than 8 characters."
        document.getElementById("validateName").innerHTML = text;
    }//Validate Description 
    else if (description === "" || description.length < 15 || description == null) {
        let textdesc = "Enter value more than 15 characters."
        document.getElementById("validateDescription").innerHTML = textdesc;
    }
    //Validate Assigned to
    else if (formAssigned.selectedIndex == "" || formAssigned.selectedIndex == 0) {
        let textAssigned = "Assign a task owner";
        document.getElementById("validateAssigned").innerHTML = textAssigned;
        //document.getElementById("formAssigned").focus();
        return false;
    }//validatation for duedate
    else if (dueDate == "" || dueDate == null || theDate > anotherDate) {
        let UserDate = "Duedate required and should be greater than today";
        //alert("You've entered a date that has already been!")
        document.getElementById("validateDate").innerHTML = UserDate;
    }//Validate Status new Date ('2022-04')
    else if (status.selectedIndex == 0) {
        let validStatus = "Select Status of project";
        document.getElementById("validateStatus").innerHTML = validStatus;
        //document.querySelector('#status').innerHTML = 
        // document.getElementById("formAssigned").focus();
    }
    //included the function in taskmanager.js to store values   
    else {
        homeworkTask.storeValue()
    }

}, false)

