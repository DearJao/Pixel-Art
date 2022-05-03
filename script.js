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
//pinta os pixels
const pixels = document.querySelectorAll('.pixel');

for (pixelsCount = 0; pixelsCount < pixels.length; pixelsCount += 1) {
  pixels[pixelsCount].addEventListener('click', pixelSelected);
}

function pixelSelected(event) {
  const selectedColor = document.querySelector('.selected');
  const activeColor = window.getComputedStyle(selectedColor);
  const bgColor = activeColor.getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}

// limpa o quadro
let clearBoard = document.querySelector('#clear-board');
  clearBoard.addEventListener('click', function () {
    const pixelsColors = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixelsColors.length; i +=1){
        pixelsColors[i].style.backgroundColor = 'white';
      }
    }
  );

//cria pixel 
function createPixels(pixels){
    for  (let index = 0; index < pixels * pixels; index += 1) {
        const newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.addEventListener('click', pixelSelected);
        // newDiv.addEventListener('click', clear)
        pixelBoard.appendChild(newDiv);
    }
}
createPixels(5)
