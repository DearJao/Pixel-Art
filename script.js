const pixelBoard = document.querySelector('#pixel-board')

function createPixels(pixels){
    for  (let index = 0; index < pixels * pixels; index += 1) {
        const newDiv = document.createElement('div');
        newDiv.className = 'pixel';
        pixelBoard.appendChild(newDiv);
    }
}
createPixels(5)

