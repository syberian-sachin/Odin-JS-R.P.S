// function to get computer choice.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function to get human choice.
function getHumanChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
    if (["rock", "paper", "scissors"].includes(userInput)) {
        return userInput;
    } else {
        console.log("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

// variables to keep track of scores.
let playerScore = 0;
let computerScore = 0;

// function to play a single round.
function playRound() {
    const playerChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    // determine the winner and update scores
    if (playerChoice === computerChoice) {
        console.log("It's a tie");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        console.log(`you win this round! &{playerChoice} beats &{computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose this round! &{computerChoice} beats &{playerChoice}`);
    }
}

// function to play the entire game
function playGame() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerRound();
    }

    // Declare the final winner
    if (playerScore > computerScore) {
        console.log("you win the game!");
    } else if (computerScore > playerScore) {
        console.log("you lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game 
playRound();