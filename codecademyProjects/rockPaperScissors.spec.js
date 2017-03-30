/**
 * Created by julia.harper on 3/17/17.
 */
"use strict";

const determineWinner = require('./rockPaperScissors.js');


describe(determineWinner, function() {

    describe("when the user inputs the 'bomb' cheat", () => {
        it("confirms the user choice is 'bomb'", () => {
            expect(determineWinner("bomb")).toEqual('nobody can beat you!');
        });
    });

    describe("when the result is a tie", () => {

        it ("compares two choices of 'rock'", () => {
            expect(determineWinner("rock", "rock")).toEqual('the game is tied');
        });
        it("compares two choices of 'scissors'", () => {
            expect(determineWinner("scissors", "scissors")).toEqual('the game is tied');
        });
        it("compares two choices of 'paper'", () => {
            expect(determineWinner("paper", "paper")).toEqual('the game is tied');
        });
    });

    describe("when the user wins", () => {

        it("compares 'rock' with 'scissors'", () => {
           expect(determineWinner("rock", "scissors")).toEqual('you beat the computer!');
        });

        it("compares 'scissors' with 'paper'", () => {
            expect(determineWinner("scissors", "paper")).toEqual('you beat the computer!');
        });
        it("compares 'paper' with 'rock'", () => {
            expect(determineWinner("paper", "rock")).toEqual('you beat the computer!');
        });
    });

    describe("when the computer wins", () => {
        it("compares 'scissors' with 'rock'", () => {
            expect(determineWinner("scissors", "rock")).toEqual('the computer wins!');
        });
        it("compares 'paper' with 'scissors'", () => {
            expect(determineWinner("paper", "scissors")).toEqual('the computer wins!');
        });
        it("compares 'rock' with 'paper'", () => {
            expect(determineWinner("rock", "paper")).toEqual('the computer wins!');
        });
    });

});

