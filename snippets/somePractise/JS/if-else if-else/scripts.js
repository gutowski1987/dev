var age = Number(prompt('Ile masz lat?'));

if (age <= 0) {
    alert('Podałeś błędny wiek');
}
if (isNaN(age)) {
    alert('Podałeś błędny wiek');
}

if (age === 21) {
    alert('Masz 21 lat! Najlepszego!');
}

if (age > 0 && age % 2 !== 0) {
    alert('Twój wiek jest NIEPARZYSTY');
} else if (age > 0) {
    alert('Twój wiek jest PARZYSTY');
}
