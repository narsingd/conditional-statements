#!/usr/bin/env node

var view = require("./view");

console.log('Welcome to Operation Spark\'s Guessing Game!');

var _maxTurns;
var _turns;
var _answer;

var mainMenu;
var gamePrompt;

mainMenu = view.makeMenu("(s) Start game, (q) quit", /^[sq]$/);
mainMenu.on('userInput', onMainMenuInput);
mainMenu.show();

function onMainMenuInput(input) {
    // TODO 1 : Create a switch case to process the main menu input //
    
}

function start(maxTurns) {
    _maxTurns = (maxTurns) ? maxTurns : 7;
    _turns = [];
    
    // TODO 2 : generate a random number between 0 and 100 //
    
    
    console.log('We selected a number between 0 and 100.');
    console.log('You have a limited number of turns to guess the correct answer. Go...');
    
    gamePrompt = view.makeMenu("Guess", /^[0-9][0-9]?$|^100$/);
    gamePrompt.on('userInput', onGamePromptInput);
    gamePrompt.show();
}

function onGamePromptInput(input) {
    /*
     * Ensure we have a value of type Number
     */
    input = parseInt(input, 10);
    
    // TODO 3 : use if ...else-if ...else to process the game prompt input //
    
    
    // TODO 4: use if ...else to do next turn only if there's a remaining turn //
    
    
}


function doNextTurn(input, tip) {
    console.log(tip);
    gamePrompt.show();
}

function endGame() {
    console.log('The correct answer was %d', _answer);
    console.log('You guessed %s', _turns.toString());
    mainMenu.show();
}
