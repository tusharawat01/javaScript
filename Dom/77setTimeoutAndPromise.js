//promise && setTimeout
//I want to resolve/reject promise after 2 sec


function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
                resolve();
            } else {
                reject();
            }
        }, 2000)
    })
}

ricePromise()
    .then(() => { console.log("resolved") })
    .catch(() => { console.log("rejected") });