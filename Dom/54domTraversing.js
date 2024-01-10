//Dom traversing

// const rootNode = document.getRootNode();
// console.log(rootNode); // root node is document
// const htmlElementNode = rootNode.childNodes[0];//for finding child node (HTML)
// console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);//<head></head>
// console.log(textNode1);//#text
// console.log(bodyElementNode);//<body></body>

// console.log(headElementNode.parentNode);//show parent node <html></html>

//sibling relation
// console.log(headElementNode.nextSibling);//#text

//by default in js white-space is normal so all spaces does not include

// console.log(headElementNode.nextElementSibling); //<body></body> show next element it ignore spaces


// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333"

// const container = document.querySelector(".container");
// console.log(container.childNodes);//NodeList(5) [text, h1, text, p, text]
// console.log(container.children);//HTMLCollection(2) [h1, p]  not included (spaces and new lines)or text