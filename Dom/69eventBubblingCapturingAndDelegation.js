//event bubbling/propogation
//event capturing
//event delegaton

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

//event bubbling

// child.addEventListener("click", () => {
//     console.log("you clicked on child")
// })


// parent.addEventListener("click", () => {
//     console.log("you clicked on parent")
// })


// grandparent.addEventListener("click", () => {
//     console.log("you clicked on grandparent")
// })

//event bubbling - if you click child class its parent class and parents patrent class automatically called first child called thrn parent then grandparent


//event capturing


// child.addEventListener("click", () => {
//     console.log("you clicked on child")
// }, true)


// parent.addEventListener("click", () => {
//     console.log("you clicked on parent")
// }, true)


// grandparent.addEventListener("click", () => {
//     console.log("you clicked on grandparent")
// }, true)

//event capturing - if you click on chid first the higher order parent called(grandparent) then parent then child

//event delegation

// grandparent.addEventListener("click", () => {
//     console.log("you clicked on something")
// });
//if we click on child or parent same method called 
grandparent.addEventListener("click", (e) => {
    console.log(e.target);
});

//if we click on child e.target is child same for others by this we dont have to give event listner for others specially