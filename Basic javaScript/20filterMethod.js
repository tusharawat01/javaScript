//filter method

// const numbers = [1,5,3,2,6,4,7,8,9];

// const isEven = function(number){
//     return number%2===0;
// }

// const evenNumbers = numbers.filter(isEven);                     //filter callback function always return boolean value
// console.log(evenNumbers);                                       //filter function makes an array of all true returned by call back function



// const numbers = [1,5,3,2,6,4,7,8,9];



// const evenNumbers = numbers.filter(function(number){
//     return number%2===0;
// });
// console.log(evenNumbers); 



//reduce method
// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue;
// },0);  //if we do not pass initial value of accumulator then the 0th index array value will be acumulator value and 1st index value will be current value

// console.log(sum);

//accumulator      currentvalue    return value
//0                  1              1
//1                  2              3
//3(previous return) 3              6
//6                  4              10
//10                 5              15


// real life example of ecart

const userCart = [
    {productId:1,productName:"mobile",price:10000},
    {productId:2,productName:"Laptop",price:30000},
    {productId:3,productName:"TV",price:15000}
]

const sum = userCart.reduce((totalPrice,currentProduct)=>{
    return currentProduct.price + totalPrice;
},0);

console.log(sum);