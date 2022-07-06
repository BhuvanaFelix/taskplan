class TaskManager {
    constructor(currentId = 0, name, description, assignedTo, dueDate, status) {
        this.currentId = currentId;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        this.allInfo = this.getlocalstorage(); //calling local storage

    }
    //function to 
    getlocalstorage() {
        let a = localStorage.getItem("allInfo"); //getting "allinfo" as a  key element using get method
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

        this.allInfo.push(info);
        localStorage.setItem("allInfo", JSON.stringify(this.allInfo)); //stringify converts a JavaScript object or value to a JSON string
        //setting values to localstorage using "allInfo" key by converting Json.
        $('#createModal').modal('hide');
        homeworkTask.render(); //after saving data
        console.log(info);
    }
    render = () => {
        let lineItem = "";
        this.allInfo.forEach(createTaskHtml);

        document.getElementById("myToDoList").innerHTML = lineItem;

        function createTaskHtml(item, index) //getting each todo list array index key
        {
            lineItem += '<div class="todo-box '+item.status+' col-sm-6 col-md-3"><h5 class="card-title">' + item.name + '</h5><p class="card-text"><br><b> Description: </b>' + item.description + ' <br><b>Assigned to: </b>' + item.assignedTo + '<br><b>Date: </b> ' + item.dueDate + '<br><b>Status: </b>' + item.status + '</p> <a href = "#" class="btn btn-success '+item.status+'hide" onclick = "homeworkTask.DoneToDo(' + index + ')">Done</a> <a hreaf ="#" class ="btn btn-danger" onclick = "homeworkTask.deleteToDo(' + index + '); return false" > Delete </a></div>';

        }

    }

    
    DoneToDo = (index) => {
        alert(index);
        let toDO = this.allInfo[index];
        this.allInfo[index].status = "Done"
        localStorage.setItem("allInfo", JSON.stringify(this.allInfo));
        homeworkTask.render();
        /*
        tasks.forEach((item) => {
            if (item.id === index) {
                
              }
        })
        //$('#createModal').modal('show');
*/
    }
    

deleteToDo = (index) => {
    this.allInfo.splice(index, 1);
    localStorage.setItem("allInfo", JSON.stringify(this.allInfo));
    homeworkTask.render();
} 

}

const homeworkTask = new TaskManager();
homeworkTask.render(); //intial load of data