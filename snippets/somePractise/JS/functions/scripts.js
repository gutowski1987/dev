// czy liczba jesy parzysta
//function jestParzysta(num) {
//    if (num % 2 === 0) {
//        return 'Liczba jest parzysta';
//    } else {
//        return 'Liczba nie jest parzysta';
//    }
//}

function jestParzysta(num) {
    return num % 2 === 0;
}

//silnia liczby
function silnia(num) {
    var wynik = 1;
    if (num) {
        for (var i = 2; i <= num; i++) {
            wynik *= i;
        }
        return wynik;
    } else {
        return 1;
    }
}

//Zamiana określonego znaku na inny w srtingu
function zamianaZnaku(str) {
    var newStr = str.replace(/-/g, '_');
    return newStr;
}
