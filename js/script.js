// Zagranie komputera

let randomInteger = Math.floor(Math.random() * 3 + 1);
let computerMove = '';

console.log('Komputer wylosował: ' + randomInteger);

if (randomInteger == 1) {
    computerMove = 'papier';
} else if (randomInteger == 2) {
    computerMove = 'kamień';
} else if (randomInteger == 3) {
    computerMove = 'nożyczki';
}

// Zagranie gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyczki');
let playerMove = 'nieznany ruch';

console.log('Gracz wybrał: ' + playerInput);

if (playerInput == 1) {
    playerMove = 'papier';
} else if (playerInput == 2) {
    playerMove = 'kamień';
} else if (playerInput == 3) {
    playerMove = 'nożyczki';
}

// Rozstygnięcie gry

if (computerMove == playerMove) {
    printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to remis.');
} else if (playerMove == 'papier' && computerMove == 'kamień') {
    printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to wygrana gracza.');
} else if (playerMove == 'papier' && computerMove == 'nożyczki') {
    printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to wygrana komputera.');
} else if (playerMove == 'kamień' && computerMove == 'papier') {
    printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to wygrana komputera.');
} else if (playerMove == 'kamień' && computerMove == 'nożyczki') {
    printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to wygrana gracza.');
} else if (playerMove == 'nożyczki' && computerMove == 'papier') {
    printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to wygrana gracza.');
} else if (playerMove == 'nożyczki' && computerMove == 'kamień') {
    printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to wygrana komputera.');
} else {
    printMessage('Gracz wybrał nieprawidłowo. Gra nierozstrzygnięta.');
}