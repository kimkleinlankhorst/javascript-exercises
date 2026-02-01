const container = document.querySelector("#container");

// Add paragraph with red text
const redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.style.color = "red";
container.appendChild(redP);

// Add h3 with blue text
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue H3";
blueH3.style.color = "blue";
container.appendChild(blueH3);

// Add a div with a black border and pink background
const div = document.createElement("div");
div.setAttribute("style", "border-style: solid; border-color: black; background-color: pink");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);

// Method for the buttons:
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// Button functionality method 2 (JS out of .html file, but only one onclick function possible):
const btn = document.querySelector("#btn");
btn.onclick = alertFunction;

// Button with eventListener:
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});