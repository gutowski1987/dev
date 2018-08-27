// wypisz w konsoli odwróoną tablicę
function reverseArray(array) {
    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

//czy array jest jednorodny?
function czyJednorodna(array) {
    var pierwszy = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== pierwszy) {
            return false;
        }
    }
    return true;
}

//sumowanie tablicy
function sumArray(arr) {
    var pierwszy = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var pierwszy = pierwszy + arr[i];
    }
    var suma = pierwszy;
    return suma;
}

//wersja z funkcją forEach
function sumArrayForEach(arr) {
    var wynik = 0;
    arr.forEach(function(element) {
        wynik += element;
    });
    return wynik;
}

//wydaj maksymalną liczbę z tabeli
function najwiekszaLiczba(array) {
    var wynik = array[0];
    for (var i = 1; i < array.length; i++) {
        if (wynik < array[i]) {
            wynik = array[i];
        }
    }
    var maxNumber = wynik;
    return maxNumber;
}
