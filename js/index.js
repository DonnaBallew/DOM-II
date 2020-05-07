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

//Event 5 -> DBLCLICK
const changeImage = document.querySelector(".intro img");
// console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
  changeImage.src = "img/volkswagen.jpg";
  changeImage.alt = "A blue die-cast volkswagen";
});

//Event 6 -> SCROLL
document.addEventListener("scroll", () => {
  document.querySelectorAll("h2").forEach((item) => {
    item.style.color = "#4aa860";
    item.style.fontSize = "5rem";
  });
});

document.addEventListener("scroll", () => {
  document.querySelectorAll("h4").forEach((item) => {
    item.style.color = "#ec113b";
  });
});

//Event 7 -> RESIZE
window.addEventListener("resize", () => {
  const cityBus = document.querySelector(".intro img");
  const resizeBody = document.querySelector("body");
  const resizeHeader = document.querySelector("header");

  cityBus.src = "img/fun-bus-city.jpg";
  cityBus.alt = "A yellow die-cast volkswagen in the city";
  resizeBody.style.backgroundColor = "#daf3f5";
  resizeHeader.style.backgroundColor = "#fcf2a4";
});

//Event 8 -> CLICK
const pressBtn = document.querySelectorAll(".btn");

pressBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.textContent = "Pack My Bags!";
    element.style.border = "4px dotted orange";
    element.style.transition = "all 2s";
  });
});

//Event 9 & 10 -> MOUSEENTER & MOUSELEAVE
const newPointer = document.querySelectorAll("h4");

newPointer.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.cursor =
      "url('https://img.icons8.com/metro/26/000000/sun-glasses.png'), auto";
    element.style.backgroundColor = "#fce420";
  });
});

newPointer.forEach((element) => {
  element.addEventListener("mouseleave", () => {
    element.style.background = "";
  });
});

//PROPAGATION
document.querySelectorAll(".destination").forEach((div) => {
  div.addEventListener("click", () => {
    div.style.backgroundColor = "#f5d6c1";
  });
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("I clicked on the button!");
    event.stopPropagation();
  });
});

//STOP REFRESH
