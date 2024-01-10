//function returning promise

function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("fried rice");
        } else {
            reject(new Error("something missing from bucket"));
        }
    })
}


ricePromise().then(
    // .then for when promise resolve or fullfilled
    (a) => {
        console.log("let's eat ", a);
    }).catch(
        //.catch when promise reject or not fullfilled
        (error) => {
            console.log(error);
        })
