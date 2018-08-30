var name = prompt('Jak masz na imię?');
var surname = prompt('Podaj nazwisko:');
var age = prompt('Ile masz lat?');
var fullName = name + ' ' + surname;
var daysLife = age * 365 - Math.round(age / 4);

console.log('Twoje dane to: ' + fullName);
console.log('Masz ' + age + ' lat(a).');
alert(name + ' żyjesz już ' + daysLife + ' dni!');
