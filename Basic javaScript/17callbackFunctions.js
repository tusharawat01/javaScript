// Callback function

// function myFunc(callback){
//     callback();
// }

// function myFunc2(){
//     console.log("inside my func 2");
// }

// myFunc(myFunc2);



// function returning function
function myFunc(){
    function hello(){
        console.log("Hello World!");
    }
    return hello;
}

const ans = myFunc();
ans();