const pixelBoard = document.querySelector('#pixel-board');
const colorsButtons = document.getElementsByClassName('color');



//mudas a cor selecionada
function changeColors(event) {
    const selected = document.querySelector('.selected')
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

//torna as cores botões
for (let btn of colorsButtons) {
    btn.addEventListener('click', changeColors)
}

const pixels = document.querySelectorAll('.pixel');

for (pixelsCount = 0; pixelsCount < pixels.length; pixelsCount += 1) {
  pixels[pixelsCount].addEventListener('click', pixelSelected);
}

function pixelSelected(event) {
  let selectedColor = document.querySelector('.selected');
  let activeColor = window.getComputedStyle(selectedColor);
  let bgColor = activeColor.getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}

//cria pixel 
function createPixels(pixels){
    for  (let index = 0; index < pixels * pixels; index += 1) {
        const newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.addEventListener('click', pixelSelected);
        pixelBoard.appendChild(newDiv);
    }
}
createPixels(5)
