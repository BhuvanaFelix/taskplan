class TaskManager {
    constructor() {
        this.tasks = this.getlocalstorage(); //calling local storage
    }
    //function to get initial object
    getlocalstorage() {
        let a = localStorage.getItem("tasks"); //getting "tasks" as a  key element using get method
        if (typeof a === "undefined" || a === null || a === undefined) //checking the values if null, if there is no key
        {
            return []; //return empty array
        }
        return JSON.parse(a);//parse is converting a string into JSON object 
    }

    resetErrors = () => {
        //empty error messages before validation start.
        let errorEle = document.querySelectorAll('.error');
        for (var i = 0; i < errorEle.length; ++i) {
            errorEle[i].innerHTML = '';
        }
        //remove onblur is-invalid red error box after error is cleared.
        let inValiderrorEle = document.querySelectorAll('.is-invalid');

        for (var i = 0; i < inValiderrorEle.length; ++i) {

            inValiderrorEle[i].classList.remove("is-invalid");
        }

    }
    storeValue = () => {

        let task = {};

        //for add new task getting elements from form using DOM element
        task.name = document.getElementById("name").value;
        task.description = document.getElementById("description").value;
        task.assignedTo = document.getElementById("formAssigned").value;
        task.dueDate = document.getElementById("date").value;
        task.status = document.getElementById("status").value;
        //for editing task getting element from form using DOM element
        if (this.taskIndex === "") {
            //add new task if the value is null
            this.tasks.push(task);
        }
        else {
            //Updating or replacing existing index task.
            this.tasks[this.taskIndex] = task;
        }
        localStorage.setItem("tasks", JSON.stringify(this.tasks)); //stringify converts a JavaScript object or value to a JSON string
        //setting values to localstorage using "tasks" key by converting Json.
        $('#createModal').modal('hide');
        homeworkTask.render(); //after saving data we are re-rendering data
    }
    render = () => {
        let lineItem = "";
        this.tasks.forEach(createTaskHtml);

        document.getElementById("myToDoList").innerHTML = lineItem;

        function createTaskHtml(item, index) //getting each todo list array index key
        {
            //converting date format in dd/mm/yyyy format
            let dueDateFormatted = new Date(item.dueDate);
            let yyyy = dueDateFormatted.getFullYear();
            let mm = dueDateFormatted.getMonth() + 1;
            let dd = dueDateFormatted.getDate();
            dueDateFormatted = dd + '/' + mm + '/' + yyyy;
            lineItem += 
            `<div class="todo-box ${item.status} col-sm-6 col-md-3">  
                <h5 class="card-title pull-right">${item.name}</h5>
                <p class="card-text"><br>
                <b> Description: </b>${item.description} <br>
                <b>Assigned to: </b>${item.assignedTo}<br>
                <b>Date: </b>${dueDateFormatted}<br>
                <b>Status: </b>${item.status }
                </p> 
                <button type="button" class="btn btn-primary" onclick = "homeworkTask.editTodo(${index})" data-toggle="modal" data-target="#EditTask">Edit</button>
                <a href = "#" class="btn btn-success ${item.status}hide " onclick = "homeworkTask.DoneToDo (${index})">Done</a> 
                <a hreaf ="#" class ="btn btn-danger" onclick = "homeworkTask.deleteToDo(${index}); return false" > Delete </a>
            </div>`;

        }

    }
    //Done button coding 
    DoneToDo = (index) => {
        this.tasks[index].status = "Done";
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        homeworkTask.render();

    }
    /*getting task by ID
    getTaskById(taskId){
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
          const task = this.tasks[i];
          if(task.id === taskId){
            foundTask = task;
          }
        }
        return foundTask;
      }*/
    addTodo() {
        //reset form values before starting todo list.
        document.getElementById("taskForm").reset();
        this.taskIndex = "";
        //reset error messages before adding a tasks.
        this.resetErrors();
        document.getElementById("task_title").innerHTML = 'Create a Task';
        //document.getElementById("editIndex").value = "";
        $('#createModal').modal('show');
    }
    //editing the task that we need to edit.
    editTodo(taskIndex) {//passing index to edit function to match the values of Todo tasks.
        //assign edit task value matching index value
        this.taskIndex = taskIndex;
        console.log(this.taskIndex)
        //reset error msgs before editing tasks
        this.resetErrors();
        document.getElementById("task_title").innerHTML = 'Edit a Task';
        document.getElementById("editIndex").value = taskIndex;
        document.getElementById("name").value = this.tasks[taskIndex].name;
        document.getElementById("description").value = this.tasks[taskIndex].description;
        document.getElementById("formAssigned").value = this.tasks[taskIndex].assignedTo;
        let dueDateFormatted = new Date(this.tasks[taskIndex].dueDate);
        /* console.log(`Before formatting${dueDateFormatted}`);
         let yyyy = dueDateFormatted.getFullYear();
         //If the month is 9, it needs to be set as 09 not 9 simply. So it applies for day field also.
         let dd = ("0" + dueDateFormatted.getDate()).slice(-2);
         let mm = ("0" + dueDateFormatted.getMonth()).slice(-2);
         //format date
         //Date control in HTML 5 accepts in the format of Year - month - day 
         dueDateFormatted = yyyy + '-' + mm + '-' + dd;
         console.log(dueDateFormatted);*/
        document.getElementById("date").value = this.tasks[taskIndex].dueDate;
        document.getElementById("status").value = this.tasks[taskIndex].status;
        //after assigning the values to innerHTML show the modal.
        $('#createModal').modal('show');
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
        if (deleteConfirm) {
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