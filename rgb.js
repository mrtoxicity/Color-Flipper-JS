const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgbColor = "rgb(";
  for (let i = 0; i < 2; i++) {
    let x = getRandomNumber();
    rgbColor += x + ", ";
  }
  let x = getRandomNumber();
  rgbColor += x + ")";

  color.textContent = rgbColor;
  document.body.style.backgroundColor = rgbColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
