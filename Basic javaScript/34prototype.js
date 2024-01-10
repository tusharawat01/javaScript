//now we using create user prototype to store userMethos function

// const userMethods = {
//     about :function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age >=18;
//     },
//     sing: function(){
//         return "too nana la la";
//     }
// }
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(createUser.prototype);   // we use Object.create to set usermethod in proto is we do not want to set another object then we can make normal empty object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;

    return user;
}
createUser.prototype.about =function(){
    return `${this.firstName} is ${this.age} years old.`
};
createUser.prototype.is18 =function(){
    return this.age >=18;
};
createUser.prototype.sing = function(){
    return "too nana la la";
};

const user1 = createUser("Tushar","Rawat","tushar7314tr@gmail.com",23,"new delhi");
const user2 = createUser("Aman","Rawat","tushar7314tr@gmail.com",23,"new delhi");
const user3 = createUser("Dinesh","Rawat","tushar7314tr@gmail.com",23,"new delhi");

console.log(user1.about());
console.log(user3.sing());