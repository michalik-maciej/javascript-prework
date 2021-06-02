let randomInteger = Math.floor(Math.random() * 3 + 1);

console.log('Komputer wylosował: ' + randomInteger);

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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyczki');

console.log('Gracz wybrał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == 1) {
    playerMove = 'Papier';
}
else if (playerInput == 2) {
    playerMove = 'Kamień';
}
else if (playerInput == 3) {
    playerMove = 'Nożyczki';
}

printMessage('Twój ruch to: ' + playerMove);