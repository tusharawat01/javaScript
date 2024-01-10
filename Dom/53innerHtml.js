//inner Html
//inside header all is inner html

const headline = document.querySelector(".headline");
headline.innerHTML = "<h1>Inner html changed</h1>";
headline.innerHTML += "<button class =\"btn\">Learn more</button>"
console.log(headline.innerHTML);