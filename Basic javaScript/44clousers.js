// clousers
//functions can return functions

//Example of clousers
//1.

// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName);
//     }
//     return printName;
// }
// const ans = printFullName("tushar","rawat");
// ans();

//2.
// function hello(x){
//     const a ="varA";
//     const b ="varB";
//     return function(){
//         console.log(a,b,x)
//     }
// }

// const ans = hello("arg");
// ans();

//3.

// function myFunction(power){
//     return function(number){
//         return number**power;
//     }    

// }

// const a = myFunction(3);
// const ans = a(2);
// console.log(ans);

//4.
function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("You called me");
            counter++;
        }else{
            console.log("You again called me");
        }
    }
}
const myFunc= func();
myFunc();
myFunc();