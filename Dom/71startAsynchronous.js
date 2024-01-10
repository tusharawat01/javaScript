//synchronous programming vs asynchronous programming
//synchronous programming
// line by line execution one work at a time
//in synchronous one part os a code can block other part of code 

//setTimeout
// console.log("Script start");
// function hello() {
//     console.log("Hello World!");
// }
// setTimeout(hello, 1000);    //1000milli sec = 1sec   delay
// console.log("Script end")

console.log("Script start");

const id = setTimeout(() => {              //setTimeout is a browser function not a javascript func so js send it to browser and then browser send this call back function to callback queue and waits till whole code will executed then callback queue send callback fxn and execute it
    console.log("Hello World!")
}, 1000);

console.log("Script end")

//if we want to end the setTine out
clearTimeout(id);

