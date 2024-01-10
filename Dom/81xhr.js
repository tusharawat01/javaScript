const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

//step1
xhr.open("GET", URL);
// xhr.onreadystatechange = function () {
//     // console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }

//or
xhr.onload = function () {         //onload starts when ready state === 4
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();
