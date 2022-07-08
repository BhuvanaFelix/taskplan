class TaskManager {
    constructor(currentId = 0) {
        this.tasks = this.getlocalstorage(); //calling local storage
        this.currentId =currentId;
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

        let task = {};
        this.currentId++;
            ////////////////////////////
        let dueDateFormatted = new Date(document.getElementById("date").value);
        let yyyy = dueDateFormatted.getFullYear();
        let mm = dueDateFormatted.getMonth() + 1;
        let dd = dueDateFormatted.getDate();
        dueDateFormatted = dd + '/' + mm + '/' + yyyy;
        console.log(dueDateFormatted);
        ////////////////////////////
        task.name = document.getElementById("name").value;
        task.description = document.getElementById("description").value;
        task.assignedTo = document.getElementById("formAssigned").value;
        task.dueDate = dueDateFormatted;
        task.status = document.getElementById("status").value;

        this.tasks.push(task);
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
            lineItem += '<div class="todo-box '+ item.status +' col-sm-6 col-md-3">  <button type="button" class="material-symbols-outlined edit-button material-icons" onclick = "homeworkTask.editTodo(' + index + ')" data-toggle="modal" data-target="#EditTask">edit</button>    <h5 class="card-title pull-right">' + item.name + '</h5><p class="card-text"><br><b> Description: </b>' + item.description + ' <br><b>Assigned to: </b>' + item.assignedTo + '<br><b>Date: </b> ' + item.dueDate + '<br><b>Status: </b>' + item.status + '</p> <a href = "#" class="btn btn-success '+ item.status +'hide " onclick = "homeworkTask.DoneToDo (' + index + ')">Mark as Done</a> <a hreaf ="#" class ="btn btn-danger" onclick = "homeworkTask.deleteToDo(' + index + '); return false" > Delete </a></div>';

        }

    }
    //Done button coding 
    DoneToDo = (index) => {
        this.tasks[index].status = "Done";
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        homeworkTask.render();

    }
    //getting task by ID
    getTaskById(taskId){
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
          const task = this.tasks[i];
          if(task.id === taskId){
            foundTask = task;
          }
        }
        return foundTask;
      } 
    //editing the task that we need to edit.
    editTodo(taskId, name, description, assignedTo, dueDate, status){
        $('#editModal').modal('show');
        let task = this.getTaskById(taskId);
        task.name = this.tasks[taskId].name;
        task.description = this.tasks[taskId].description;
        task.assignedTo = this.tasks[taskId].assignedTo;
        task.dueDate = this.tasks[taskId].dueDate;
        task.status = this.tasks[taskId].status;
      }
    
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