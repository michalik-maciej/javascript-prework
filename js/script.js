// Zagranie komputera

let randomInteger = Math.floor(Math.random() * 3 + 1);
console.log('Komputer wylosował: ' + randomInteger);
let computerMove = getMoveName(randomInteger);
console.log('Ruch komputera to: ' + computerMove);
// Zagranie gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyczki');
console.log('Gracz wybrał: ' + playerInput);
let playerMove = getMoveName(playerInput);
console.log('Ruch gracza to: ' + playerMove);

// Rozstygnięcie gry

printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to ' + displayResult(computerMove, playerMove));