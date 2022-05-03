/* eslint-disable spaced-comment */
const pixelBoard = document.querySelector('#pixel-board');
const colorsButtons = document.getElementsByClassName('color');

//muda a cor selecionada
function changeColors(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

//torna as cores botões
// eslint-disable-next-line no-restricted-syntax
for (const btn of colorsButtons) {
  btn.addEventListener('click', changeColors);
}

//pinta os pixels
const pixels = document.querySelectorAll('.pixel');

for (let pixelsCount = 0; pixelsCount < pixels.length; pixelsCount += 1) {
  // eslint-disable-next-line no-use-before-define
  pixels[pixelsCount].addEventListener('click', pixelSelected);
}

//escolha o pixels e pinta
function pixelSelected(event) {
  const selectedColor = document.querySelector('.selected');
  const activeColor = window.getComputedStyle(selectedColor);
  const bgColor = activeColor.getPropertyValue('background-color');
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = bgColor;
}

// limpa o quadro
const clearBoard = document.querySelector('#clear-board');
const newLocal = () => {
  const pixelsColors = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsColors.length; i += 1) {
    pixelsColors[i].style.backgroundColor = 'white';
  }
};
clearBoard.addEventListener('click', newLocal);

//cria pixels
// eslint-disable-next-line no-shadow
function createPixels(pixels) {
  for (let index = 0; index < pixels * pixels; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newDiv.addEventListener('click', pixelSelected);
    pixelBoard.appendChild(newDiv);
  }
}
createPixels(5);
