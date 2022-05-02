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

function paint(event) {
    const currentSelected = document.querySelector('.selected')
    event.target.style.backgroundColor = currentSelected.style.backgroundColor;
}


//cria pixel 
function createPixels(pixels){
    for  (let index = 0; index < pixels * pixels; index += 1) {
        const newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        newDiv.addEventListener('click', paint)
        pixelBoard.appendChild(newDiv);
    }
}
createPixels(5)



// sudo add-apt-repository ppa:libratbag-piper/piper-libratbag-git

