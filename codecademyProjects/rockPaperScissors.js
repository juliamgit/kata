/**
 * Created by julia.harper on 3/17/17.
 */
"use strict";

module.exports = determineWinner;

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'nobody can beat you!';
    }
    if(userChoice === computerChoice) {
        return 'the game is tied';
    };
    if(userChoice === 'rock' && computerChoice === 'scissors') {
        return 'you beat the computer!';
    };
    if(userChoice === 'scissors' && computerChoice === 'paper' ) {
        return 'you beat the computer!';
    };
    if(userChoice === 'paper' && computerChoice === 'rock') {
        return 'you beat the computer!';
    };
        return 'the computer wins!';
};

//
// function determineWinner(userChoice, computerChoice) {
//     if (userChoice === 'bomb'){
//         return 'nobody can beat you!';
//     };
//     if(userChoice === computerChoice){
//         return 'the game is tied';
//     };
//     if (userChoice === 'rock') {
//         if (computerChoice === 'scissors') {
//             return 'you win!';
//         } else {
//             return 'you lose!';
//         }
//     }
//     if (userChoice === 'scissors') {
//         if (computerChoice === 'paper') {
//             return 'you win!';
//         } else {
//             return 'you lose!';
//         }
//     }
//     if (userChoice === 'paper') {
//         if (computerChoice === 'rock') {
//             return 'you win!';
//         } else {
//             return 'you lose!';
//         }
//     }
// }
