var numberOfSquares = 6;

var colors = colorGenerator(numberOfSquares);
var squares = document.querySelectorAll('.square');
var chosenColor = chooseColor();
var colorDisplay = document.querySelector('h2');
var messageDisplay = document.getElementById('message');
var header = document.querySelector('header');
var playAgainButton = document.querySelector('#playagain');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
let scoreNumber = document.querySelector('#scorenumber');
scoreNumber.innerHTML = 0;
const modal = document.querySelector('#myModal');
const span = document.querySelector('.close');

easyButton.addEventListener('click', function() {
    scoreNumber.innerHTML = 0;
    easyButton.classList.add('chosenlevel');
    hardButton.classList.remove('chosenlevel');
    numberOfSquares = 3;
    colors = colorGenerator(numberOfSquares);
    chosenColor = chooseColor();
    colorDisplay.textContent = chosenColor;
    messageDisplay.textContent = ' ';
    playAgainButton.innerHTML =
        'New colors<span>it will take away 1 point...</span>';
    playAgainButton.style.backgroundColor = '#ffffff';
    playAgainButton.style.color = '#3377ff';
    header.style.backgroundColor = '#3377ff';
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});

hardButton.addEventListener('click', function() {
    scoreNumber.innerHTML = 0;
    easyButton.classList.remove('chosenlevel');
    hardButton.classList.add('chosenlevel');
    numberOfSquares = 6;
    colors = colorGenerator(numberOfSquares);
    chosenColor = chooseColor();
    colorDisplay.textContent = chosenColor;
    messageDisplay.textContent = ' ';
    playAgainButton.innerHTML =
        'New colors<span>it will take away 1 point...</span>';
    playAgainButton.style.backgroundColor = '#ffffff';
    playAgainButton.style.color = '#3377ff';
    header.style.backgroundColor = '#3377ff';
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
    }
});

playAgainButton.addEventListener('click', function() {
    // generate new colors
    generateNewColors();
    if (scoreNumber.innerHTML > 0) {
        scoreNumber.innerHTML = Number(scoreNumber.innerHTML) - 1;
    }
});

colorDisplay.textContent = chosenColor;

for (var i = 0; i < squares.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
}

squares.forEach(square =>
    square.addEventListener('click', function() {
        var selectedColor = this.style.backgroundColor;

        if (selectedColor === chosenColor) {
            let presentSquares = [...document.querySelectorAll('.square')];
            let rgb = presentSquares.map(
                square => square.style.backgroundColor
            );
            if (!rgb.includes('rgb(51, 51, 51)')) {
                scoreNumber.innerHTML = Number(scoreNumber.innerHTML) + 1;
            }
            messageDisplay.textContent = 'Great! You WIN!!';
            changeColor(selectedColor);
            playAgainButton.style.color = '#ffffff';
            playAgainButton.style.backgroundColor = '#3377ff';

            if (scoreNumber.innerHTML === '3') {
                pyro.classList.add('pyro');
                before.classList.add('before');
                after.classList.add('after');
                modal.style.display = 'flex';
            }

            generateNewColors();
        } else {
            this.style.backgroundColor = '#333333';
            messageDisplay.textContent =
                'ouh... mistake, choose further. Get some practise :)';
            scoreNumber.innerHTML = 0;
        }
    })
);

// po wskazaniu poprawnej odpowiedzi
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        header.style.backgroundColor = color;
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function colorGenerator(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function generateNewColors() {
    colors = colorGenerator(numberOfSquares);
    chosenColor = chooseColor();
    colorDisplay.textContent = chosenColor;
    messageDisplay.textContent = ' ';
    for (var i = 0; i < squares.length; i++) {
        //add colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
}

// fireworks

const pyro = document.querySelector('.pyro1');
const before = document.querySelector('.before1');
const after = document.querySelector('.after1');

// popup win

// when user clicks on the X in popup
span.addEventListener('click', () => {
    modal.style.display = 'none';
});
// when user clicks outside the popup
window.addEventListener('click', e => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
// when usec clicks play again
modal.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        generateNewColors();
        pyro.classList.remove('pyro');
        before.classList.remove('before');
        after.classList.remove('after');
        modal.style.display = 'none';
        scoreNumber.innerHTML = 0;
        header.style.backgroundColor = '#3377ff';
    }
});
