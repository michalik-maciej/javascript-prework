let playerMove = 'papier';

printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyczki, to wygrywasz!');

let randomInteger = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomInteger);

let computerMove = 'nieznany ruch';

if (randomInteger == 1) {
    computerMove = 'Papier';
}
else if (randomInteger == 2) {
    computerMove = 'Kamień';
}
else if (randomInteger == 3) {
    computerMove = 'Nożyczki';
}

printMessage('mój ruch to: ' + computerMove);