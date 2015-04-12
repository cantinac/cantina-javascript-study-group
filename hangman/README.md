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

---

## Running tests in the browser

If you prefer, you can run these tests in the browser. The file `spec-runner.html` will load the Jasmine testing framework, then `src/hangman.js` and `src/hangman-spec.js`, execute our tests and report on the results. Simply open this file in the browser (you can drag and the file so that it uses the `file://` protocol) and it will run.

Tips:

* You can run a single test at a time by clicking on its name.
* Be sure to leave your console open, since there are often helpful messages that are emitted.