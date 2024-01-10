import { firstName as fname } from "./utils/firstName.js";
import { age } from "./utils/age.js";
import Person from "./utils/Person.js"

console.log(fname, age);
const person = new Person("Tushar", "Rawat", 23);
console.log(person);