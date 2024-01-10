// Object
// arrays are good but not sufficient
// for real world Data
// object store key value Pairs
// objects dont have index

// const person ={
//     name:"Tushar",
//     age:22,
//     hobbies:["singing","Dancing","reading"]
// };
// console.log(person);

// console.log(person.name); or console.log(person["name"]);
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair in Object
// person.gender="male"; or person["gender"] = male;
// console.log(person);


// difference between dot and bracket notation

// const person ={
//     name:"Tushar",
//     age:22,
//     "person hobbies":["singing","Dancing","reading"]   // we cannot use space in javascript so we have to use double qoutes
// };

//console.log(person."person hobbies");  // this will show error so we use bracket notation in this case

// console.log(person["person hobbies"]);


// const key ="email";
// const person ={
//     name:"Tushar",
//     age:22,
//     "person hobbies":["singing","Dancing","reading"]   // we cannot use space in javascript so we have to use double qoutes
// };
// person[key] = "tushar@gmail.com";
// console.log(person);

// how to itrate Object
// const person ={
//     name:"Tushar",
//     age:22,
//     "person hobbies":["singing","Dancing","reading"]   // we cannot use space in javascript so we have to use double qoutes
// };

// using for in loop
// for(let key in person){
//     console.log(key," : ",person[key]);   //or console.log(`${key} : ${person[key]}`);
// }

// using object.keys
const person ={
    name:"Tushar",
    age:22,
    "person hobbies":["singing","Dancing","reading"]   // we cannot use space in javascript so we have to use double qoutes
};
for(let key of Object.keys(person)){
console.log(person[key])};
