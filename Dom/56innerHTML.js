//add new html elements to page


//innerHTML to add html elements

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo </li>";   //for changing innerHTML
// todoList.innerHTML = todoList.innerHTML + "<li>New Todo </li>";   //or you can write
todoList.innerHTML += "<li>New Todo </li>";
todoList.innerHTML += "<li>Teach Students </li>";

//when you should use it , when you shoud not