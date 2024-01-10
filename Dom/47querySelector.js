//select element using query selector

const mainHeading = document.querySelector("#main-heading"); //query selector works for everything like class id etc
console.log(mainHeading);   //# is used to select id

const header = document.querySelector(".header");  //.is used for selecting class
console.log(header);

const navItem = document.querySelectorAll(".nav-item");//is different class have same name to select all classes we used querySelectorAll
console.log(navItem);