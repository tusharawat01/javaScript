//get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));//get the href attribute value
link.setAttribute("href", "https://codprog.com"); //set attribute
console.log(link.getAttribute("href"));