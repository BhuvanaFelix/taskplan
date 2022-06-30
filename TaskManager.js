class TaskManager {
    constructor(currentId = 0) {
        this.currentId = currentId
        this.tasks = []        
    }
    
    storeValue(name, description, assignedTo, dueDate, status) {
        const newTask = {
            currentId: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        }
        this.tasks.push(newTask) 
    } 
};

let myName = document.getElementById("name");
let myDescription = document.getElementById("description").value;
let myAssignedTo = document.getElementById("formAssigned").value;
let myDueDate = document.getElementById("date").value;
let myStatus = document.getElementById("status").value;

const homeworkTask = new TaskManager();

homeworkTask.storeValue(myName, myDescription, myAssignedTo, myDueDate, myStatus);

console.log(homeworkTask.storeValue);