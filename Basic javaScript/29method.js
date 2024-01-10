//methods
//function inside object

// const person ={
//     firstname : "tushar",
//     age : 8,
//     about : function(){
//         console.log(`person name is ${this.firstname} and age is ${this.age}`);
//     }
// }
// person.about();


// call() method

// const user1 = {
//     firstName : "tushar",
//     age : 23,
//     about : function(hobby,favSport){
//         console.log(this.firstName,this.age);
//     }

// }
// const user2 = {
//     firstName : "mohit",
//     age : 20
// }

// user1.about.call(user2,"guitar","cricket");   //call is used for calling a method from another object

// apply method
// same as call  but we can call argument in array

// user1.about.call(user2,["guitar","cricket"]);

//bind method
// const func =  user1.about.bind(user2,"guitar","cricket"); 
// func();

//bind stored function and later we can use it




