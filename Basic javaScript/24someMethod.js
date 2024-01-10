//some method

// some will check weather one element satisfy the condition 

// const numbers = [2,4,6,9,7,8];

// const ans = numbers.some((number)=>{
//     return number%2===0;
// });
// console.log(ans);

//realistic example check that if any product price is less than 2000

const product =[

    {productId:1,productName:"mobile",price:10000},
    {productId:2,productName:"Laptop",price:30000},
    {productId:3,productName:"washing machine",price:15000},
    {productId:4,productName:"TV",price:12000},
    {productId:5,productName:"headset",price:1000}
]

const checkPrice = product.some((item)=>{
    return item.price <=2000;
});
console.log(checkPrice);