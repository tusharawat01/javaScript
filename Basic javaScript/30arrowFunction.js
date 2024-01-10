// arrow function
//arrow function does not have .this keyword

// const user1 = {
//     firstName : "tushar",
//     age : 23,
//     about : function(hobby,favSport){
//         console.log(this.firstName,this.age);
//     }

// }
// user1.about();


// other way to write method(methos is function inside object)

const user1 = {
    firstName : "tushar",
    age : 23,
    about(hobby,favSport){
        console.log(this.firstName,this.age);
    }
}
user1.about();