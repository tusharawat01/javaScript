//intro to event

//3 ways to add event

//1. old way
//add to the html file directly
//<button class="btn btn-headline">Learn more</button> //befor giving event
//<button class="btn btn-headline" onclick="console.log('You Clicked Me')">Learn more</button>

//2.not agood way because we can not assign click event more than one time
//select the button where we have to perform event
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function () {
//     console.log("YOU CLICKED ME");
// }

//3.

const btn = document.querySelector(".btn-headline");
//method ---- addEventListener
// function clickMe() {
//     console.log("You Clicked Me");
// }
// btn.addEventListener("click", clickMe);
//          or
btn.addEventListener("click", function () {
    console.log("You Clicked Me")
});