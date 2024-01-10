// Arrays :- orderd collection of items

// let fruits = ["apple","banana","mango","orange"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,3,"mango","banana",null,undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[1]);

// changing in Array
// let fruits = ["apple","banana","mango","orange"];
// console.log(fruits);
// fruits[1] = "guava";
// console.log(fruits);

// let fruits = ["apple","banana","mango","orange"];
// let obj ={};   //object literals
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

// array push pop
// let fruits = ["apple","banana","mango","orange"];
// console.log(fruits);
// fruits.push("papaya");    //push used to add element into array at last index
// console.log(fruits);
// fruits.pop();               //pop used to remove one element from last index
// console.log(fruits);

// we can use pop to print removed item
// let fruits = ["apple","banana","mango","orange"];
// let poppedFruit = fruits.pop();

// console.log("popped fruit is ",poppedFruit);

// unshift and shift keyword
// let fruits = ["apple","banana","mango","orange"];
// console.log(fruits);
// fruits.unshift("watermelon");         //unshift is used to add items in array at 0th index
// console.log(fruits)

// let fruits = ["apple","banana","mango","orange"];
// console.log(fruits);
// fruits.shift();                          // shift is use remove an item in arrays at 0yh index
// console.log(fruits);

// shift also used as pop to print removed item

// push and pop is faster than unshift and shift because in shift and unshift we have to shift every item in the index and in pop and push we have to only add or remove at last no shifting of index

// prmitive vs reference datatype

// primitive type
// let n1 = 7;
// let n2 = n1;

// console.log("the value of n1 ", n1);  //n1 = 7
// console.log("the value of n2 ", n2);  //n2 = 7
// n1++;
// console.log("the value of n1 ", n1);  //n1 = 8
// console.log("the value of n2 ", n2);  //n2 = 7

//reference type

// let array1 =["item1","item2"];
// let array2 = array1;

// console.log("the value of array1 ", array1);  //the value of array1  (2) ['item1', 'item2']
// console.log("the value of array2 ", array2);  //the value of array1  (2) ['item1', 'item2']

// array1.push("item3");

// console.log("the value of array1 ", array1);  //the value of array1  (3) ['item1', 'item2', 'item3']
// console.log("the value of array2 ", array2);  //the value of array1  (3) ['item1', 'item2', 'item3']



// how to clone AN Array
// let array1 =["item1","item2"];
// let array2 = array1;

// console.log(array1 === array2);  //true

//let array1 =["item1","item2"];
//let array2 =array1.slice(0) //or let array2 =[].concat(array1); or
//let array2 =[...array1];  //spread operator

// console.log(array1 === array2)   //false clone done

// array1.push("item3");
// console.log(array1);
// console.log(array2);

//slice one is faster among two but mostly spread operator is used

// is we want to clone and add few item on it
// let array1 =["item1","item2"];
// let array2 =array1.slice(0).concat(["item3","item4"]); //or
// let array2 =[].concat(array1,["item3","item4"]);
// let array2 = [...array1,"item3,"item4"]

// for loop in Array

// let fruits = ["apple","banana","mango","orange"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// print all in upper case

// let fruits = ["apple","banana","mango","orange"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].toUpperCase());
// }

// use const for creating Array

// const fruits =["banana","oraange","mango"];
// fruits.push("apple");  //we can use push pop concat slice etc in constarray but we cannot change array address
// fruits = ["apple"]; //we cnnot change address its not allowed in const
// console.log(fruits);

// for of loop in Array
// const fruits =["banana","oraange","mango"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// for in loop
// const fruits =["banana","oraange","mango"];
// for(let index in fruits){
//     console.log(fruits[index]);
// }


//array destructuring
// const fruits =["banana","oraange","mango","apple"];
// let fruit1 =fruits[0];
// let fruit2 =fruits[1];
// let fruit3 =fruits[2];
//or we can use array destucturing
// let[fruit1,fruit2,...otherFruit]=fruits;

// console.log("frutt1 is ",fruit1);
// console.log("frutt2 is ",fruit2);
// console.log(otherFruit);



