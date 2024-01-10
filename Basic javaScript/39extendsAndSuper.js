class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(a){
        return `${this.name} eats ${a}`;
    }

}
const animal1 = new Animal("Lion", 100);
const animal2 = new Animal("Dog",32);

console.log(animal1);
console.log(animal1.eat("other animals"));

// class Dog{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(a){
//         return `${this.name} eats ${a}`;
//     }

// }
// const tommy = new Dog("tommy", 100);


// console.log(tommy);
// console.log(tommy.eat("dog food"));

// we use same methods and constructor in dog class so we use extends keyword for this

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;                      //super()parent class
    }
    run(){
        return `${this.name} is running at speed of ${this.speed}kmph`
    }
}
const tommy = new Dog("tommy", 100,45);
console.log(tommy);
console.log(tommy.eat("dog food"));
console.log(tommy.run());
