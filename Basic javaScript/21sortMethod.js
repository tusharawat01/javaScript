//sort

// const numbers = [5,9,100,300,1400];
// numbers.sort();
// console.log(numbers);

//number will not sort as we expected because js will convert number into string and then it sort them on the basis of ascii value
//sort will change the array

// const userName=["tushar","aman","vipin","aditya","vikas"];
// userName.sort();
// console.log(userName);

//this will sort coreectly because userName is already string 
//capital alphabate has less ascii value than small alphabate

// const numbers = [5,9,100,300,1400];
// numbers.sort((a,b)=>{
//     return a-b; //for ascending order return a-b and for descending order return b-a
// });
// console.log(numbers);


// const product =[
//     {productId:1,productName:"mobile",price:10000},
//     {productId:2,productName:"Laptop",price:30000},
//     {productId:3,productName:"washing machine",price:15000},
//     {productId:4,productName:"TV",price:12000},
//     {productId:5,productName:"headset",price:1000}
// ]

// product.sort((a,b)=>{
//     return a.price-b.price;   //it will change the whole array if we do not want to  change the array we can use slice to clone an array
// });
// console.log(product);


const product =[

    {productId:1,productName:"mobile",price:10000},
    {productId:2,productName:"Laptop",price:30000},
    {productId:3,productName:"washing machine",price:15000},
    {productId:4,productName:"TV",price:12000},
    {productId:5,productName:"headset",price:1000}
]

const lowToHigh=  product.slice(0).sort((a,b)=>{
    return a.price-b.price;   
});
console.log(product);
console.log(lowToHigh);
