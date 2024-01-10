//getters and setters
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

}

const person1 = new Person("Tushar","Rawat",23);
const person2 = new Person("Mohan","Sharma",19);
// console.log(person1.fullName());
console.log(person1.fullName);//is we want full name without calling then we use get at starting of fullName method
//we can use method as a properties by using get keyword

//setName method is used to set or change names
// person1.setName("Ram","Kumar");
       //or we can use
//person1.firstName = "Ram";
//person1.lastname = "Kumar";

// console.log(person1.fullName);

//set is used when we want to set or change value 

person1.fullName = "Ram Kumar";
console.log(person1.firstName);
console.log(person1.lastName);
