// const user1={
//     firstName : "Tushar",
//     lastName : "Rawat",
//     email : "tushar7314tr@gmail.com",
//     age : 23,
//     address : "House Number,colony,pincode,state",
//     about : function(){
//         return `${this.firstname} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age >=18;
//     }
// }

//if we need thousand os user details we did not repeat this for that we make a function
//function(that function create object)
//then add key value pair
//then return the object

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`
    };
    user.is18 = function(){
        return this.age >=18;
    }
    return user;
}

const user1 = createUser("Tushar","Rawat","tushar7314tr@gmail.com",23,"new delhi");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
