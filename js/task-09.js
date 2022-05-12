const bodyColor = document.querySelector("body");
const buttonColor = document.querySelector(".change-color")
const colorName = document.querySelector(".color")


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButtonColor = () => {
  bodyColor.style.backgroundColor=getRandomHexColor();
  colorName.textContent=bodyColor.style.backgroundColor
}

buttonColor.addEventListener("click",changeButtonColor)

