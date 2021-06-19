const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hslColor = "hsl(";

  let x = getRandomNumber1();
  hslColor += x + ", ";

  let y = getRandomNumber2();
  hslColor += y + "%, ";

  let z = getRandomNumber2();
  hslColor += z + "%)";

  color.textContent = hslColor;
  document.body.style.backgroundColor = hslColor;
});

function getRandomNumber1() {
  return Math.floor(Math.random() * 361);
}

function getRandomNumber2() {
  return Math.floor(Math.random() * 101);
}
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
