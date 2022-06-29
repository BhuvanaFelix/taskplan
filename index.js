const validateTaskForm = () =>{
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let formAssigned =  document.getElementById("formAssigned");
    let dueDate = document.getElementById("date");
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
} 