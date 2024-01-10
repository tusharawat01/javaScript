// block scope vs function scope

// let and const are block scope
// var is a function scope

// {
//     // let firstName = "tushar";
//     const firstName = "tushar";       //not accessiable because console is outside the block and let and const is block funnction
// }
// console.log(firstName);


// {
//     let firstName = "tushar";
//     console.log(firstName);    //axccessiable because console is in block
// }



// {
//     var firstName = "tushar";
//     console.log(firstName);
// }
//                                         // both are accessiable because var is function scope
// {
//     var firstName = "tushar";
// }
// console.log(firstName);



// default parameters

// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }                                // prevously used method for undefined 
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);


//new method to deal with unndefined
// function addTwo(a,b = 0){
   
//     return a+b;
// }
// const ans1 = addTwo(4,5);
// console.log(ans1);

// const ans2 = addTwo(4);
// console.log(ans2);


// rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
// }
// myfunc(1,2,3,4,5,6,7,8);

//function to add all parameters which were given by User

// function addAll(...num){
//     let sum = 0;
//     for(let i=0;i<num.length;i++){
//         sum = sum+num[i];
        
//     }
//     return sum;
// }

// let ans = addAll(2,4,5,6,4);
// console.log(ans);

// parameter destucturing


const person = {
    firstName:"tushar",
    gender:"male",
    age:23
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);         //normal way to print or use obj in function
//     console.log(obj.age);
// }
// printDetails(person);

// by using parameter decunsturing

// function printDetails({firstName,gender,age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }
// printDetails(person);
