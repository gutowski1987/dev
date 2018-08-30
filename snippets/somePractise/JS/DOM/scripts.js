var colorChange = document.querySelector('button');
var isBlue = false;
/*
colorChange.addEventListener('click', function() {
    if (isBlue) {
        document.body.style.background = 'white';
    } else {
        document.body.style.background = 'blue';
    }
    isBlue = !isBlue;
});*/

colorChange.addEventListener('click', function() {
    document.body.classList.toggle('blue');
});

//tablica wyników
var p1Button = document.getElementById('p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.getElementById('reset');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var numInput = document.querySelector('input');
var winScoreDisplay = document.querySelector('p span');
var p1Score = 0;
var p2Score = 0;
var winScore = 5;
var gameOver = false;

p1Button.addEventListener('click', function() {
    if (!gameOver) {
        p1Score++;
        console.log(p1Score, winScore);
        if (p1Score === winScore) {
            gameOver = true;
            p1Display.classList.add('win');
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winScore) {
            gameOver = true;
            p2Display.classList.add('win');
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function() {
    reset();
});

numInput.addEventListener('change', function() {
    winScoreDisplay.textContent = this.value;
    winScore = Number(this.value);
    reset();
});

function reset() {
    p1Display.classList.remove('win');
    p2Display.classList.remove('win');
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameover = false;
}
