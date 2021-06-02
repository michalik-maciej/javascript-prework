'use strict';

function printMessage(msg) {
    console.log('wywołanie funkcji printMessage z argumentem: ', msg);
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(moveId) {
    console.log('wywołanie funkcji getMoveName z argumentem: ', moveId);
    if (moveId == 1) {
        return 'papier';
    } else if (moveId == 2) {
        return 'kamień';
    } else if (moveId == 3) {
        return 'nożyczki';
    }
}

function displayResult(computerMove, playerMove) {
    console.log('wywołanie funkcji displayResult z argumentem: ', computerMove, ' i ', playerMove);
    if (computerMove == playerMove) {
        return 'remis';
    } else if (playerMove == 'papier' && computerMove == 'kamień') {
        return 'wygrana gracza';
    } else if (playerMove == 'papier' && computerMove == 'nożyczki') {
        return 'wygrana komputera';
    } else if (playerMove == 'kamień' && computerMove == 'papier') {
        return 'wygrana komputera';
    } else if (playerMove == 'kamień' && computerMove == 'nożyczki') {
        return 'wygrana gracza.'
    } else if (playerMove == 'nożyczki' && computerMove == 'papier') {
        return 'wygrana gracza.'
    } else if (playerMove == 'nożyczki' && computerMove == 'kamień') {
        return 'wygrana komputera';
    } else {
        return 'gra nierozstrzygnięta';
    }
}