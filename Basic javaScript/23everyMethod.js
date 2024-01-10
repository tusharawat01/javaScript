//every method


// const numbers = [2,4,6,9,7,8];

// const ans = numbers.every((number)=>{
//     return number%2===0;
// });
// console.log(ans);

//this method will check every condition if any one condition is not satisfied then its returned false


//realistic example check every product price is less than 30000

const product =[

    {productId:1,productName:"mobile",price:10000},
    {productId:2,productName:"Laptop",price:30000},
    {productId:3,productName:"washing machine",price:15000},
    {productId:4,productName:"TV",price:12000},
    {productId:5,productName:"headset",price:1000}
]

const checkPrice = product.every((item)=>{
    return item.price <=30000;
});
console.log(checkPrice);
