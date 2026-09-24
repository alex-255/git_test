// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.setAttribute("style", "color: red;");
redParagraph.textContent = "Hey I’m red!";
container.appendChild(redParagraph);

const blueH3 = document.createElement("h3");
blueH3.setAttribute("style", "color: blue;");
blueH3.textContent = "I’m a blue h3!";
container.appendChild(blueH3);

const divContainer = document.createElement("div");
divContainer.setAttribute(
  "style",
  "border: 1px solid black; background-color: pink;",
);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
divContainer.appendChild(h1);
const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";
divContainer.appendChild(paragraph);

container.appendChild(divContainer);
