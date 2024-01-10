// async awaits

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const response = await fetch(URL);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error("Something went wrong");
    }

}

getPosts()
    .then(myData => {
        console.log(myData);
    })
    .catch(error => {
        console.log(error);
    })

// fetch(URL)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data)
//     })