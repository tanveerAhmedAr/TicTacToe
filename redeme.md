Tic Tac Toe Game

Description

This is a simple Tic Tac Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. If all spaces are filled without a winner, the game ends in a draw.

Features

Two-player mode (O and X turn-based system)

Displays the current player's turn

Highlights the winner when the game ends

Detects draw conditions

"New Game" and "Reset" buttons for restarting the game

Responsive design with a modern UI

Files Included

index.html: The main HTML file containing the game layout.

style.css: The CSS file for styling the game.

app.js: The JavaScript file that contains game logic.

tic-tac-toe-icon.png: Icon to be shown in the title tab.

How to Play

Open index.html in a browser.

The game starts with Player O.

Click on an empty box to make a move.

Players take turns marking spaces (O and X).

The game announces the winner or a draw when conditions are met.

Click Reset Game to start over or New Game after a winner is announced.

Game Logic

The game board consists of a 3x3 grid of buttons.

A player's turn is determined by a boolean variable (turn0), alternating between O and X.

Moves are recorded and checked against predefined winning patterns.

If a winning pattern is found, the game announces the winner.

If all spaces are filled without a winner, it is declared a draw.

Buttons are disabled after selection to prevent overwriting.

Technologies Used

HTML

CSS

JavaScript

Screenshots

Future Enhancements

Add AI-based single-player mode.

Improve animations and UI design.

Implement a scoreboard tracking wins and losses.

Author

Developed by Tanveer Ahmed

