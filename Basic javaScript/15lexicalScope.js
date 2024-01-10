// function inside function
// function app(){
//     const myFunc =() =>{
//         console.log("this is myFunc");
//     }
//     const addTwo =(num1,num2) =>{
//         return num1+num2;
//     }
//     const mul=(num1,num2)=>{
//         return num1*num2;
//     }
//     console.log("hello world!");
//     myFunc();
// }

// app();

//lexical scope

const myvar = "value1";

function myApp(){
    function myFunc(){
        console.log("inside my func",myvar);
    }
    console.log(myvar);
    myFunc();
}

myApp();
