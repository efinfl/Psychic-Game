
// Variables that hook into html tags
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var turnsLeftDisplay = document.getElementById("turnsLeft");


/* Set global variables: wins, losses (each los takes away a guess) 
*/
var wins = 0;
var losses = 0;
var turns = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z",];

// Displays initial stats
winsDisplay.innerHTML = wins;
lossesDisplay.innerHTML = losses;
turnsLeftDisplay.innerHTML = turns;

// StartIt() funtion is called to generate a random numger.
startIt()

// function to generate random number which was called abouve. 
function startIt() {
    // Random computer choice
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
}

// When a key is pressed the choice is recorded into userGuess
document.onkeyup = function user(event) {
    var userGuess = event.key;
    console.log("This is the random comp choice: " + computerChoice);
    console.log("This is user guess: " + userGuess);

    // Checks if userGuess and computerChoice are the same. If true wins tick up on and the folloiwn happens
    if (userGuess === computerChoice) {
        wins++;
        console.log(wins);

        // Dislplays wins in html doc by pulling wins variable applying it to winsDisplay
        winsDisplay.innerHTML = wins;

        alert("That's amazing. Your psychic!")

        // This resets the game
        startIt();
    }
    // Takes away a turn if user guess doesn't match the computer guess
    else {
        turns--;
        console.log("Turns left" + turns);
        // Displays turns left in html doc by pulling turns variable and assigning it to turnsLeftDisplay variable
        turnsLeftDisplay.innerHTML = turns;
    }
    // Checks to see if user has run out of turns
    if (turns === 0) {
        // If turns have run out, add a loss, reset turns to 9 and restart game.
        losses++;
        console.log("Losses: " + losses);

        // Displays losses in html document
        lossesDisplay.innerHTML = losses;

        turns = 9;
        console.log("Reset turns after loss: " + turns);

        alert("Bummer! Try again.")

        startIt();
    }

}

// If its the same give user a score.

// If not take away a guess

// when guess equals 0, end game and give them a loss.





