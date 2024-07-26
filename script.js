// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let noOfGuesses = 0;

function guessNumber() {
    let guessedNumber = parseInt(document.getElementById('guessInput').value);
    let resultText = '';
    noOfGuesses++;

    if (guessedNumber > randomNumber) {
        resultText = '🔻 Lower number, please!';
    } else if (guessedNumber < randomNumber) {
        resultText = '🔺 Higher number, please!';
    } else {
        resultText = '🎉 Congrats! You guessed the right number!';
        document.getElementById('noOfGuesses').innerText = `You guessed it in ${noOfGuesses} tries.`;
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('guessInput').value = '';
}
