//promise.resolve
//promise chaining

// const myPromise = Promise.resolve(10);

// myPromise.then(value => {
//     console.log(value);
// })

//or

// Promise.resolve(5).then(value => {
//     console.log(value);
// })

//.then() always return promise

//promise chaining
function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo")
    })
}

myPromise()
    .then((value) => {
        console.log(value);
        value += "bar";
        return value;   //internally returning Promise.resolve(value);
    })
    .then((value) => {
        console.log(value);
        value += "cam";
        return value;
    })
    .then((value) => {
        console.log(value);
    })