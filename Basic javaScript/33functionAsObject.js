//we can treat function as an object 

function hello(){
    console.log("hello world");
}

//we can add our own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

//name property tells  function name
// console.log(hello.name);

// console.log(hello.prototype); //gives empty object or free space
//only function provide prototype property
//we can add key value pair,function in prototype as much as we want

hello.prototype.a="abc";
hello.prototype.b="xyz";
hello.prototype.sing= function(){
    return "lalala";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());