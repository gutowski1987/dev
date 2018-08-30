var shoppingList = [];

//co chcesz zrobić
var input = prompt('Co chcesz zrobić? (nowy, usuń, lista, koniec)');

while (input !== 'koniec') {
    //dodawanie do listy
    dodajPozycje();
    //sprawdzenie listy
    pokazListe();
    //usuń pozycję
    usunPozycje();
    var input = prompt('Co chcesz zrobić? (nowy, lista, koniec)');
}

console.log('Lista zakupów zakończona');

function dodajPozycje() {
    if (input === 'nowy') {
        var newItem = prompt('Co chcesz kupić?');
        shoppingList.push(newItem);
        console.log('Pozycja została dodana');
    }
}

function usunPozycje() {
    if (input === 'usuń') {
        var del = prompt('Którą pozycję usuwamy?');
        shoppingList.splice(del, 1);
        console.log('usunięto pozycję');
    }
}

function pokazListe() {
    if (input === 'lista') {
        console.log('********');
        shoppingList.forEach(function(zakupy, nr) {
            console.log(nr + ': ' + zakupy);
        });
        console.log('********');
    }
}
