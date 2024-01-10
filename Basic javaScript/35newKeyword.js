// new keyword

function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}

const user1 = new createUser("harshit",6);

//new keywod
//creating empty object .... this ={};
// return this(empty object)
//automatically sets createUser prototype(Object.create(createuser.prototype))

createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}
console.log(user1);
