// Zad.1.1.
// Napisz generator kodów pocztowych, który przyjmuje 2 stringi: "79-900" i "80-155" i zwraca listę kodów pomiędzy nimi.

let zipCodes = [];
let start, stop;

function zipCodeCounter(a, b) {
    start = a.split('-').map(cur => parseInt(cur));
    stop = b.split('-').map(cur => parseInt(cur));

    for (var i = start[0]; i < stop[0]; i++) {
        for (var j = start[1] + 1; j <= 999; j++) {
            if (j < 10) {
                j = '00' + j;
            } else if (j < 100) {
                j = '0' + j;
            }
            zipCodes.push(`${start[0]}-${j}`);
        }
        start[0]++;
        start[1] = 0;
    }

    if ((start[0] = stop[0])) {
        for (var i = start[1] + 1; i < stop[1]; i++) {
            if (i < 10) {
                i = '00' + i;
            } else if (i < 100) {
                i = '0' + i;
            }
            zipCodes.push(`${start[0]}-${i}`);
        }
    }
}
zipCodeCounter('79-900', '80-155');

// Zad.1.2.
// Podana jest lista zawierająca elementy o wartościach 1-n. Napisz funkcję, która sprawdzi, jakich elementów brakuje:

function difference(arr, n) {
    let fullArr = [];
    let delIndex = [];
    for (let i = 1; i <= n; i++) {
        fullArr.push(i);
    }
    for (cur of arr) {
        delIndex.push(fullArr.indexOf(cur));
    }
    delIndex.sort(function(a, b) {
        return b - a;
    });
    for (cur of delIndex) {
        fullArr.splice(cur, 1);
    }
}
difference([2, 3, 7, 4, 9], 10);

// Zad.1.3.
//
// Należy wygenerować listę liczb od 2 do 5.5 ze skokiem co 0.5.
// Dane wynikowe muszą być typu decimal.

function numGenerator(start, stop) {
    const addend = 0.5;
    let numbers = [];
    const counter = stop / addend - start / addend;
    let num = start;
    numbers.push(num);
    for (let i = 1; i <= counter; i++) {
        numbers.push(num + addend);
        num += addend;
    }
}
numGenerator(2, 5.5);
