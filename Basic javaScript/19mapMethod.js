// map method
// similar as foreach but map gives new array in return so we mostly use return inside map function

// const numbers = [2,3,5,8,4];

// const square = function(number){
//     return number*number;
// }

// const squareNumber= numbers.map(square);
// console.log(squareNumber);

//function inside map

// const numbers = [2,3,5,8,4];

// const squareNumber= numbers.map(function(number){
//     return number*number;
// });
// console.log(squareNumber);

//using arrow function
const numbers = [2,3,5,8,4];

const squareNumber= numbers.map((number)=>  {
    return number*number;
});
console.log(squareNumber);
