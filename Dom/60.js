//some old method to support poor internrx explorer
//appendChild
// insertBefore
// replaceChild
//removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
ul.appendChild(li);