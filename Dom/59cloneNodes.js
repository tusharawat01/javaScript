//clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2); //only one thing happens either it append or prepend which comeas at last at compilation
//if you want append and prepend then you can clone of li
