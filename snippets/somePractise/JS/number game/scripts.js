const secretNumber = 5;
let chosenNumber = Number(prompt('Zgadnij liczbę od 1 do 10 o której myślę'));

if (chosenNumber >= 1 && chosenNumber <= 10) {
    if (chosenNumber === 5) {
        alert('Wygrałeś! Myślałem o liczbie 5');
    } else {
        if (chosenNumber < secretNumber) {
            alert('Niestety to nie ta liczba! Jest większa!');
        } else {
            alert('Niestety to nie ta liczba! Jest Mniejsza!');
        }
    }
} else {
    alert('Wybrałeś liczbę poza zakresem. Przegrałeś!');
}

//while loops in console

console.log('Wypisz liczby od -10 do 19');
let x = -10;

while (x < 20) {
    console.log(x);
    x++;
}

console.log('Wypisz parzyste liczby od 10 do 40');
let y = 10;

while (y <= 40) {
    console.log(y);
    y += 2;
}

console.log('Wypisz liczby parzyste pomiędzy 300 a 333');
let z = 300;

while (z <= 333) {
    console.log(z);
    z += 2;
}

console.log('Wypisz liczby podzielne przez 3 i 5 z zakresu 5-50');
let count = 5;

while (count <= 50) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log(count);
    }
    count++;
}

// the same loops written as for loop in console

for (var i = -10; i < 20; i++) {
    console.log(i);
}

for (var i = 10; i <= 40; i += 2) {
    console.log(i);
}

for (var i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (var i = 5; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}
