//static list vs live list
// const listItems = document.querySelectorAll(".todo-list li");
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);
console.log(listItems);
//static list list updated on web page after console but not in console
//querySelectorAll always give static list
//getElementsBySomething give live list