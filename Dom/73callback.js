//understand callback
//  example
// function myFunc(callback) {
//     console.log("Function 1");
//     callback();
// }

// myFunc(() => {
//     console.log("Function 2");
// });

// function getTwoNumbersAndAdd(number1, number2, callback) {
//     if (typeof number1 === "number" && typeof number2 === "number") {
//         callback(number1, number2);
//     } else {
//         console.log("Wrong input");
//     }

// }
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// getTwoNumbersAndAdd("4", 5, addTwoNumbers)