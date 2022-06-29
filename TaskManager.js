class TaskManager {
    constructor(currentId = 0, name, description, assignedTo, dueDate, status) {
        this.currentId = currentId;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        this._allInfo = []; 
    }
    
    storeValue = () => {

        let info = {};
        this.currentId ++,
    
        info.name = document.getElementById("name").value;
        info.description = document.getElementById("description").value;
        info.assignedTo = document.getElementById("formAssigned").value;
        info.dueDate = document.getElementById("date").value;
        info.status = document.getElementById("status").value;

        allInfo.push(info) 
    } 
 
}

const homeworkTask = new TaskManager();

homeworkTask.storeValue();

// class BookManager {
  
//     constructor(currentId = 0) {
//       // this is a constructor with a paramater currentId set to 0 by default
//       this._books = []; // 1. initialize an empty array called books
//       this.currentId = currentId; // 2. initialize a currentId set to currentId
//     }
  
//     // 3. a getter function should return the value of our books array
//     get books() {
//       return this._books;
//     }
  
//     // function addBook should create an object and push it to our books array
//     addBook(name, genre, author = ""){
//       const newBook = {
//           id: this.currentId +1,  
//           name : name,
//           genre : genre,
//           author : author
//     }
//     this.books.push(newBook);
//   }
//     // it should take in a name, genre and author and by default have an empty string
  
//       // 4. Create an object assigned to a variable for the new book using parameters given to addBook
  
//       // a) your object should consist of properties id, name,genre and author with values added when we call this method
//       // don't forget that this may require some param
  
















// var firstNames = {};

// function setFirstName(firstName){

//     if(firstNames[firstName] === undefined){
//         firstNames[firstName] = 1;
//         return;
//     }
//     firstNames[firstName]++;
// }

// function buildList(){

//     setFirstName(document.getElementById('firstName').value);

// }
