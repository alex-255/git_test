// second method
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// third method
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

btn2.addEventListener("click", function (e) {
  console.log(e);
});
