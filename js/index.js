// Your code goes here

//Event 1 & 2 -> KEY UP & KEY DOWN
const newText = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
  newText.textContent = "Come Join Us!";
  newText.style.color = "#c7624c";
  newText.style.fontSize = "5rem";
});

window.addEventListener("keyup", () => {
  newText.textContent = "Fun Bus";
  newText.style.color = "#212529";
  newText.style.fontSize = "4rem";
});

//Event 3 & 4 -> MOUSEOVER & MOUSEOUT
document.querySelectorAll(".nav a").forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.color = "white";
    element.style.backgroundColor = "#17a2b8";
    element.style.padding = "1rem";
  });
});

document.querySelectorAll(".nav a").forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.style.color = "";
    element.style.backgroundColor = "";
  });
});

//Event 5 - > DBLCLICK
const changeImage = document.querySelector("dblclick", () => {
  changeImage.src = "img/volkswagen.jpg";
  changeImage.alt = "A blue die-cast volkswagen";
});
