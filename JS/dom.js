const element = document.getElementById("head");
element.innerHTML = "hello you";
const pelement = document.getElementsByClassName("ptag");
element.style.background = "blue";
const para = document.createElement("p");
para.innerHTML = "appending paragraph";
document.body.appendChild(para);
console.log(document);
const para1 = document.createElement("p");
para1.innerHTML = "appending paragraph2";
document.body.appendChild(para1);
console.log(document);
const q = document.querySelector("h1");
console.log(q);
const q1 = document.querySelectorAll("p");
console.log(q1);