//Maps
//map is an iterable
//stored data in ordered fashion
//store key value pair like object
//duplicate key are not allowed like objects

//different b/w maps and object
//Objects can only have string or symbol as a key
//in maps we can use anything as key like array,,number,string 

// const person = new Map();
// person.set("firstName",'tushar');
// person.set('age',23);
// console.log(person);
//in map we use .get meathod to access values

// console.log(person.get("age"));
// //.keys is used to print all the keys
// console.log(person.keys());

const person1 = {
    id : 1,
    firstName : "tushar"
}

const extraInfo = new Map();
extraInfo.set(person1,{age : 23,gender : "male"});
console.log(person1.id);
console.log(extraInfo.get(person1).gender);