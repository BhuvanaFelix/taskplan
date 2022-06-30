const myvalidate = (obj) => {

    if(obj.value == "" || obj.value.length < 8)
        obj.classList.add("is-invalid");
    else
       obj.classList.remove("is-invalid");

}

const validateTaskForm = () =>{
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let formAssigned =  document.getElementById("formAssigned");
    let dueDate = document.getElementById("date").value;
    let status = document.getElementById("status");
    //Validate Name 
    if(name === ""){
        alert("Please enter your name");
    }else if(name.length < 8){
       let text = "Please enter more than 8 characters."
       document.getElementById("validateName").innerHTML = text;
       //alert("Please enter more than 8 characters");
    }else{
        document.getElementById("name").innerHTML = name;
    }
    //Validate Description
    if(description === ""){
        alert("Please enter description");
    }else if(description.length < 15){
       let textdesc = "Please enter more than 15 characters."
       document.getElementById("validateDescription").innerHTML = textdesc;
       //alert("Please enter  more than 15 characters");
    }else{
        document.getElementById("description").innerHTML = description;
    }
    //Validate Assigned to
    if(formAssigned.selectedIndex == 0){
        alert("Please select Assigning name!!!");
       // document.getElementById("formAssigned").focus();
        return false;
    }

    //validatation for duedate
    //    let UserDate = document.getElementById("userdate").value;
        let theDate = new Date().getTime();
        let anotherDate = new Date(document.getElementById("date").value).getTime();

        if(theDate > anotherDate) {
            alert("You've entered a date that has already been!")
        } 
    //     let toDate = null;
    //     toDate = new Date(); 
    //    if (toDate !== '' || new Date(dueDate).getTime() <= toDate.getTime()) {
    //           alert("Please select duedate that is bigger or Equal to today");
    //           return false;
    //      } 

    //Validate Status
    if(status.selectedIndex == 0){
        alert("Please select Status of project");
       // document.getElementById("formAssigned").focus();
    } 
};

// Display Date
// let dt = new Date();
//    document.getElementById("dateTime").innerHTML=dt;

// {let dt = new Date();
//    document.getElementById('displayDate').innerHTML = dt;}

// displayDate = new Date().toLocaleDateString();
// document.write(displayDate);

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
console.log (document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year);