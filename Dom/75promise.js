//Promise

//produce or create of promise
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice']

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("fried rice");
    } else {
        reject(new Error("something missing from bucket"))
    }
})

//consume of promise

// friedRicePromise.then(
//     //when promise resolve or fullfilled
//     (a) => {
//         console.log("let's eat ", a)
//     },
//     //when promise reject or not fullfilled
//     (error) => {
//         console.log(error);
//     })

//or

friedRicePromise.then(
    // .then for when promise resolve or fullfilled
    (a) => {
        console.log("let's eat ", a);
    }).catch(
        //.catch when promise reject or not fullfilled
        (error) => {
            console.log(error);
        })


//microtask queue priority is greater than callback queue

//if setTimeout and promise both are in same function then promise will execute first
