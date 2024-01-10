//this keyword

const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function () {
//     console.log("You Clicked Me");
//     console.log("Value of this");
//     console.log(this);

// });
//in function expression or normal function this value is btn value


btn.addEventListener("click", () => {
    console.log("You Clicked Me");
    console.log("Value of this");
    console.log(this);
});
//in arrow function this is window