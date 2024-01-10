//static method and properties
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return "This is Person class";
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
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
}

const person1 = new Person("tushar","rawat",23);
console.log(person1.about());
console.log(Person.classInfo());// when we use static in method then we call static method by using class not object
