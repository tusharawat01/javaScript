//class 

// function CreateUser(firstName,lastName,email,age,address){
//     // const user = Object.create(createUser.prototype);   // we use Object.create to set usermethod in proto is we do not want to set another object then we can make normal empty object
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     // user.about = userMethods.about;
//     // user.is18 = userMethods.is18;
// }
// CreateUser.prototype.about =function(){
//     return `${this.firstName} is ${this.age} years old.`
// };
// CreateUser.prototype.is18 =function(){
//     return this.age >=18;
// };
// CreateUser.prototype.sing = function(){
//     return "too nana la la";
// };

// const user1 =  new CreateUser("Tushar","Rawat","tushar7314tr@gmail.com",23,"new delhi");
// const user2 = new CreateUser("Aman","Rawat","tushar7314tr@gmail.com",23,"new delhi");
// const user3 = new CreateUser("Dinesh","Rawat","tushar7314tr@gmail.com",23,"new delhi");

// console.log(user1.about());
// console.log(user3.sing());


//using class
class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return "too nana la la";
    }
    func(a){
        console.log(a);
    }

}
const user1 =  new CreateUser("Tushar","Rawat","tushar7314tr@gmail.com",23,"new delhi");
const user2 = new CreateUser("Aman","Rawat","tushar7314tr@gmail.com",23,"new delhi");
//without new keyword we cannot call the class constructor

console.log(user1.firstName);
user1.func("Tushar Rawat");