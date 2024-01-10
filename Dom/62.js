//how to get the dimension of element

//height width
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect(); //gives all diension
// const info = sectionTodo.getBoundingClientRect().height; //gives only height
// const info = sectionTodo.getBoundingClientRect().width;  //gives ony width
console.log(info);