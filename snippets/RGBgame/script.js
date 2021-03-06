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

easyButton.addEventListener('click', function() {
    easyButton.classList.add('chosenlevel');
    hardButton.classList.remove('chosenlevel');
    numberOfSquares = 3;
    colors = colorGenerator(numberOfSquares);
    chosenColor = chooseColor();
    colorDisplay.textContent = chosenColor;
    messageDisplay.textContent = ' ';
    playAgainButton.textContent = 'New colors';
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
    easyButton.classList.remove('chosenlevel');
    hardButton.classList.add('chosenlevel');
    numberOfSquares = 6;
    colors = colorGenerator(numberOfSquares);
    chosenColor = chooseColor();
    colorDisplay.textContent = chosenColor;
    messageDisplay.textContent = ' ';
    playAgainButton.textContent = 'New colors';
    playAgainButton.style.backgroundColor = '#ffffff';
    playAgainButton.style.color = '#3377ff';
    header.style.backgroundColor = '#3377ff';
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
    }
});

playAgainButton.addEventListener('click', function() {
    //wygenerować New colors
    colors = colorGenerator(numberOfSquares);
    chosenColor = chooseColor();
    colorDisplay.textContent = chosenColor;
    messageDisplay.textContent = ' ';
    for (var i = 0; i < squares.length; i++) {
        //dodaje kolory do kwadratów
        squares[i].style.backgroundColor = colors[i];
    }
    //reset po wygranej
    if (playAgainButton.textContent === 'Jeszcze raz?') {
        playAgainButton.textContent = 'New colors';
        playAgainButton.style.backgroundColor = '#ffffff';
        playAgainButton.style.color = '#3377ff';
        header.style.backgroundColor = '#3377ff';
        messageDisplay.textContent = ' ';
    }
});

colorDisplay.textContent = chosenColor;

for (var i = 0; i < squares.length; i++) {
    //dodaje kolory do kwadratów
    squares[i].style.backgroundColor = colors[i];

    //clickListener do kwadratu
    squares[i].addEventListener('click', function() {
        var selectedColor = this.style.backgroundColor;

        if (selectedColor === chosenColor) {
            messageDisplay.textContent = 'Great! You WIN!!';
            changeColor(selectedColor);
            playAgainButton.textContent = 'Try more!';
            playAgainButton.style.color = '#ffffff';
            playAgainButton.style.backgroundColor = '#3377ff';
        } else {
            this.style.backgroundColor = '#333333';
            messageDisplay.textContent = 'ouh... mistake, choose further';
        }
    });
}

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
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
