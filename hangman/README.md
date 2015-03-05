## Intro
This is an exercise to build and test a Hangman game. 

It's built on the JS-Karma Seed project, which gives you a skeleton project with Karma and Jasmine ready to go.

## Getting Started

Clone this repo with `git`:
    git clone https://github.com/cantinac/cantina-javascript-study-group.git
    cd hangman

Install dependencies and run your tests with `make`:

    make


To run your tests during development, use `npm test` to run once, or use `npm run karma` to
use a watcher to check for file changes.


## Hangman Rules
The program picks a random word and prints out an underscore for each missing letter.

The player guesses a letter that might be in the word.

If the letter is in the word, the display shows the word with guessed letters revealed.

The player gets up to six wrong answers.  If they guess the letter before six wrong answers, they win!



## Exercise
Write the functions you'd use in a Hangman game in the src directory.  If you'd like a skeleton to get started, look at hangman.js .

Write tests in test/hangman-spec.js

