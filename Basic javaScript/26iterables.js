//iterables
//jispe hum for of loop lga ske
//string and array are iterable

// const firstName ="Tushar";
// for(let char of firstName){
//     console.log(char);
// };

// const myArray = ["item1","item2","item3"];
// for(let item of myArray){
//     console.log(item);
// };


//array like object
//jinke paas length property hoti hai
//aur jinko hum index se access kr skte hai
//ex:-string

// const firstName ="Tushar";
// console.log(firstName.length);
// console.log(firstName[2]);


//Sets(it is iterable)
//stores data
//sets also have its own method
//no index based access
//order is not gauranteed
//unique items only(no duplicate)

// const numbers = new Set([1,2,3]);
// console.log(numbers);

const myArray = ["item1","item2","item3"];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(myArray);
if(numbers.has(1)){
    console.log("Yes");   //.has()is a condition to find weather element is present or not
}
console.log(numbers);

