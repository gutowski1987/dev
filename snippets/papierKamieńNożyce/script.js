let name = document.getElementById('name');

startGame();

function startGame() {
    name = prompt('Podaj swoje imię:');
    document.getElementById('name').textContent = name;
}
