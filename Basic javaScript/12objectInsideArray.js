// const key1 = "myKey1";
// const key2 = "myKey2";

// const value1 = "myValue1";
// const value2 = "myvalue2";

// // const obj = {
// //    [key1] : value1,
// //    [key2] : value2
// // }

// //        or


// const obj={};
// obj[key1]= value1;
// obj[key2]= value2;



// console.log(obj);

//spread operator

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// };
// const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4"
// };

// const obj3 = {...obj1,...obj2,key5: "value5"};

// console.log(obj3);

//object destructuring

// const cricket = {
//     name: "virat",
//     century: 80,
//     jersyNo: 18,
//     age: 30
// }

// const name = cricket.name;
// const century = cricket.century;


// console.log(name,century);

//we can do this by destructuring

// const{name,century}= cricket;

// console.log(name,century);


//Object inside array
// const users = [
//     {userId: 1,firstName:"Harshit",gender:"male"},
//     {userId: 2,firstName:"Rajiv",gender:"male"},
//     {userId: 3,firstName:"Mohit",gender:"male"}

// ];
// for(let user of users){
//     console.log(user);
// }

// nested destructuring
const users = [
    {userId: 1,firstName:"Harshit",gender:"male"},
    {userId: 2,firstName:"Rajiv",gender:"male"},
    {userId: 3,firstName:"Mohit",gender:"male"}
];

// const[ user1,user2,user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

// const [{firstName}, ,{gender}] = users;
// console.log(firstName);
// console.log(gender);

//if i want to change the name of the variable
const [{firstName: name}, ,{gender}] = users;
console.log(name);
console.log(gender);


