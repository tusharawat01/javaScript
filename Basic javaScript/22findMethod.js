//find method
// const myArray =["Dog","Cat","Mouse","Lizard"];

// function isLength3(string){
//     return string.length === 5;

// }

// const ans = myArray.find((string)=>{
//     return string.length===5});
// console.log(ans);


const users =[
    {userId : 1, userName : "harshit"},
    {userId : 2, userName : "aman"},
    {userId : 3, userName : "bhanu"},
    {userId : 4, userName : "mehta"},
    {userId : 5, userName : "tushar"}
];

const ans = users.find((a)=>{
    return a.userId === 3;
});
console.log(ans);