// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`
//     };
//     user.is18 = function(){
//         return this.age >=18;
//     }
//     return user;
// }

// const user1 = createUser("Tushar","Rawat","tushar7314tr@gmail.com",23,"new delhi");
// const user2 = createUser("Aman","Rawat","tushar7314tr@gmail.com",23,"new delhi");
// const user3 = createUser("Dinesh","Rawat","tushar7314tr@gmail.com",23,"new delhi");

// if we make different users then the function about and is18 will make several times and it occupied more space so we defined these fxns earlier

const userMethods = {
    about :function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >=18;
    },
    sing: function(){
        return "too nana la la";
    }
}
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods);   // we use Object.create to set usermethod in proto is we do not want to set another object then we can make normal empty object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}

const user1 = createUser("Tushar","Rawat","tushar7314tr@gmail.com",23,"new delhi");
const user2 = createUser("Aman","Rawat","tushar7314tr@gmail.com",23,"new delhi");
const user3 = createUser("Dinesh","Rawat","tushar7314tr@gmail.com",23,"new delhi");

console.log(user1.about());
console.log(user3.sing());

//__proto__or[[prototype]](proto create bond between objects)
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = Object.create(obj1) // by this obj1 will set into proto
// //if we find key2 in obj2 and there will be no key2 then they will go to proto and search obj1;

// console.log(obj2.key1);