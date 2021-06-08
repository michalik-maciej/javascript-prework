{
    'use strict';

    function playGame(playerInput) {
        clearMessages();

        // Zagranie komputera

        const randomInteger = Math.floor(Math.random() * 3 + 1);
        console.log('Komputer wylosował: ' + randomInteger);
        const computerMove = getMoveName(randomInteger);
        console.log('Ruch komputera to: ' + computerMove);

        // Zagranie gracza

        console.log('Gracz wybrał: ' + playerInput);
        const playerMove = getMoveName(playerInput);
        console.log('Ruch gracza to: ' + playerMove);

        // Rozstygnięcie gry

        printMessage('komputer wylosował ' + computerMove + ', gracz wybrał ' + playerMove + '. Wynik to ' + displayResult(computerMove, playerMove));

    }

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(1);
    });

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}