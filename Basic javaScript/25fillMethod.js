//fill method
//value,start,end

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8];

// myArray.fill(0,2,5);
// console.log(myArray);  // fill change original array


//splice method
//start,delete,insert
//it is used when we have to delete or insert in between array
//splice changes original array

const myArray = ["item1","item2","item3"];
//for delete
// myArray.splice(1,1);
// console.log(myArray);

//for inserting
// myArray.splice(0,0,"item0");
// console.log(myArray);

// for both insert and delete
myArray.splice(0,1,"inserted item");
console.log(myArray);