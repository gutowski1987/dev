var iloscKwadratow = 6;
var kolory = generatorKolorow(iloscKwadratow);
var kwadraty = document.querySelectorAll('.kwadrat');
var wybranyKolor = wybierzKolor();
var colorDisplay = document.querySelector('h2');
var messageDisplay = document.getElementById('message');
var header = document.querySelector('header');
var playAgainButton = document.querySelector('#playagain');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');

easyButton.addEventListener('click', function() {
    easyButton.classList.add('chosenlevel');
    hardButton.classList.remove('chosenlevel');
    iloscKwadratow = 3;
    kolory = generatorKolorow(iloscKwadratow);
    wybranyKolor = wybierzKolor();
    colorDisplay.textContent = wybranyKolor;
    messageDisplay.textContent = ' ';
    playAgainButton.textContent = 'Nowe kolory';
    playAgainButton.style.backgroundColor = '#ffffff';
    playAgainButton.style.color = '#3377ff';
    header.style.backgroundColor = '#3377ff';
    for (var i = 0; i < kwadraty.length; i++) {
        if (kolory[i]) {
            kwadraty[i].style.backgroundColor = kolory[i];
        } else {
            kwadraty[i].style.display = 'none';
        }
    }
});

hardButton.addEventListener('click', function() {
    easyButton.classList.remove('chosenlevel');
    hardButton.classList.add('chosenlevel');
    iloscKwadratow = 6;
    kolory = generatorKolorow(iloscKwadratow);
    wybranyKolor = wybierzKolor();
    colorDisplay.textContent = wybranyKolor;
    messageDisplay.textContent = ' ';
    playAgainButton.textContent = 'Nowe kolory';
    playAgainButton.style.backgroundColor = '#ffffff';
    playAgainButton.style.color = '#3377ff';
    header.style.backgroundColor = '#3377ff';
    for (var i = 0; i < kwadraty.length; i++) {
        kwadraty[i].style.display = 'block';
        kwadraty[i].style.backgroundColor = kolory[i];
    }
});

playAgainButton.addEventListener('click', function() {
    //wygenerować nowe kolory
    kolory = generatorKolorow(iloscKwadratow);
    wybranyKolor = wybierzKolor();
    colorDisplay.textContent = wybranyKolor;
    messageDisplay.textContent = ' ';
    for (var i = 0; i < kwadraty.length; i++) {
        //dodaje kolory do kwadratów
        kwadraty[i].style.backgroundColor = kolory[i];
    }
    //reset po wygranej
    if (playAgainButton.textContent === 'Jeszcze raz?') {
        playAgainButton.textContent = 'Nowe kolory';
        playAgainButton.style.backgroundColor = '#ffffff';
        playAgainButton.style.color = '#3377ff';
        header.style.backgroundColor = '#3377ff';
        messageDisplay.textContent = ' ';
    }
});

colorDisplay.textContent = wybranyKolor;

for (var i = 0; i < kwadraty.length; i++) {
    //dodaje kolory do kwadratów
    kwadraty[i].style.backgroundColor = kolory[i];

    //clickListener do kwadratu
    kwadraty[i].addEventListener('click', function() {
        var wskazanyKolor = this.style.backgroundColor;

        if (wskazanyKolor === wybranyKolor) {
            messageDisplay.textContent = 'Wskazałeś poprawnie!';
            zmianaKoloru(wskazanyKolor);
            playAgainButton.textContent = 'Jeszcze raz?';
            playAgainButton.style.color = '#ffffff';
            playAgainButton.style.backgroundColor = '#3377ff';
        } else {
            this.style.backgroundColor = '#333333';
            messageDisplay.textContent = 'Błąd...';
        }
    });
}

// po wskazaniu poprawnej odpowiedzi
function zmianaKoloru(kolor) {
    for (var i = 0; i < kwadraty.length; i++) {
        kwadraty[i].style.backgroundColor = kolor;
        header.style.backgroundColor = kolor;
    }
}

function wybierzKolor() {
    var random = Math.floor(Math.random() * kolory.length);
    return kolory[random];
}

function generatorKolorow(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(przypadkowyKolor());
    }
    return arr;
}

function przypadkowyKolor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
