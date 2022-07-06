class TaskManager {
    constructor(currentId = 0, name, description, assignedTo, dueDate, status) {
        this.currentId = currentId;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        this.tasks = this.getlocalstorage(); //calling local storage

    }
    //function to 
    getlocalstorage() {
        let a = localStorage.getItem("tasks"); //getting "tasks" as a  key element using get method
        if (typeof a === "undefined" || a === null || a === undefined) //checking the values if null, if there is no key
        {
            return []; //return empty array
        }
        return JSON.parse(a);//parse converting a JSON object in text format to a Javascript object 
    }
    storeValue = () => {

        let info = {};
        this.currentId++;
            ////////////////////////////
        let dueDateFormatted = new Date(document.getElementById("date").value);
        let yyyy = dueDateFormatted.getFullYear();
        let mm = dueDateFormatted.getMonth() + 1;
        let dd = dueDateFormatted.getDate();
        dueDateFormatted = dd + '/' + mm + '/' + yyyy;
        console.log(dueDateFormatted);
        ////////////////////////////
        info.name = document.getElementById("name").value;
        info.description = document.getElementById("description").value;
        info.assignedTo = document.getElementById("formAssigned").value;
        info.dueDate = dueDateFormatted;
        info.status = document.getElementById("status").value;

        this.tasks.push(info);
        localStorage.setItem("tasks", JSON.stringify(this.tasks)); //stringify converts a JavaScript object or value to a JSON string
        //setting values to localstorage using "tasks" key by converting Json.
        $('#createModal').modal('hide');
        homeworkTask.render(); //after saving data
        console.log(this.tasks);
    }
    render = () => {
        let lineItem = "";
        this.tasks.forEach(createTaskHtml);

        document.getElementById("myToDoList").innerHTML = lineItem;

        function createTaskHtml(item, index) //getting each todo list array index key
        {
            lineItem += '<div class="todo-box '+ item.status +' col-sm-6 col-md-3"><h5 class="card-title">' + item.name + '</h5><p class="card-text"><br><b> Description: </b>' + item.description + ' <br><b>Assigned to: </b>' + item.assignedTo + '<br><b>Date: </b> ' + item.dueDate + '<br><b>Status: </b>' + item.status + '</p> <a href = "#" class="btn btn-success '+ item.status +'hide " onclick = "homeworkTask.DoneToDo (' + index + ')">Mark as Done</a> <a hreaf ="#" class ="btn btn-danger" onclick = "homeworkTask.deleteToDo(' + index + '); return false" > Delete </a></div>';

        }

    }
    DoneToDo = (index) => {
        this.tasks[index].status = "Done";
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        homeworkTask.render();
    }



    // markAsDone = (item, index) => {
        
    // let toDO = this.tasks[index];
    //     console.log(toDO);
    //     this.tasks.forEach((item) => {
    //         if (item.currentId === index) {
    //             this.tasks[item].status = "Done";
    //             console.log(this.tasks[item].status); 
    //     }
    //     document.body.style.background = "green";
    //     // document.getElementById("status").innerHTML = "Done";
    //     // const list = document.getElementById("todo-box").classList;
    //     // list.add("todo-box-done");
    // })
    // }
    
    
    
    // edit = (item, index) => {
    //     let toDO = this.tasks[index];
    //     console.log(toDO);
    //     $('#createModal').modal('show');
    //     tasks.forEach((item) => {
    //         if (item.id === index) {
    //             item.name = taskName;
    //           }
    //     })

    // }

deleteToDo = (index) => {
    let deleteConfirm = confirm('Are you sure you want to delete?');
    if(deleteConfirm) {
        alert('Action successful!');
        this.tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        homeworkTask.render();
    } else {
        alert('Action cancelled');
    }
} 

}

const homeworkTask = new TaskManager();
homeworkTask.render(); //intial load of data