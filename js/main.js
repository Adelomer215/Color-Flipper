const body = document.querySelector("body");
const changeColor = document.getElementById("change");
const hexText = document.getElementById("color-text");
let hexValue = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

changeColor.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hexValue.length);
    const randomColor = hexValue[randomNumber];
    hex += randomColor;
  }
  body.style.backgroundColor = hex;
  hexText.textContent = hex;
});
