//loop

// let navItems = document.getElementsByTagName("a"); //gives HTML collection of all classes
// console.log(navItems); //gives array like objects or html collection
//we can not use forEach loop  for html collection

// using for loop
// for (let i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i]);
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold"
// }

//using for of loop

// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold"

// }

//changing html collection into array

// navItems = Array.from(navItems);
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold"

// });

const navItems = document.querySelectorAll("a"); //returns node list
console.log(navItems);
//we can use for loop forOf loop and forEach loop like above
//we can also convert into array like above