//error handling
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     } else {
//         console.log("Something went wrong");
//     }

// }
// xhr.onerror =()=> {                //only used when network related error occurs
//     console.log("network error")
// }
// xhr.send();

//if i have to get particular object
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const URL2 = `${URL}/${id}`;
//         xhr2.open("GET", URL2);
//         xhr2.onload = () => {
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();
//     } else {
//         console.log("Something went wrong");
//     }

// }
// xhr.onerror = () => {                //only used when network related error occurs
//     console.log("network error")
// }
// xhr.send();


// using Promise

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest;
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject(new Error("Invalid"))
            }
        };
        xhr.onerror = () => {
            reject(new Error("Something went wrong"))
        }
        xhr.send();
    })

}

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        return data;
    })
    .then(data => {
        const id = data[3].id;
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse)
        console.log(newData);
    })
    .catch(error => {
        console.log(error);
    })

