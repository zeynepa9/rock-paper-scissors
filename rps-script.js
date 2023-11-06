
 // Kazananı takip etmek için değişkenler

let userScore = 0;
let computerScore = 0;
let currentRound = 0;

 // Genarete random output (rock, paper, scissors)
 let items = Array("rock", "paper", "scissors");

 function getComputerChoices() {
     let computerRandom = items[Math.floor(Math.random() * items.length)];
     return computerRandom;
 }





 function determineTheWinner(computerChoice, userInput) {
    let winner = "No one";
    let user = "user";
    let computer = "computer";
    let draw = "draw";

    if (userInput == computerChoice) {
        winner = draw;
    } else if (
        (userInput == "rock" && computerChoice == "scissors") ||
        (userInput == "paper" && computerChoice == "rock") ||
        (userInput == "scissors" && computerChoice == "paper")
    ) {
        winner = user;
    } else {
        winner = computer;
    }

    

    return winner;

    
}


let computerChoice;
let userInput;




document.addEventListener("DOMContentLoaded", function () {
    const userChoice = document.getElementById("user-choice");
    const computerChoicePrint = document.getElementById("computer-choice");
    const winnerResult = document.getElementById("winner-result");
    const userScoreElement = document.getElementById("user-score");
    const computerScoreElement = document.getElementById("computer-score");
    const currentRoundElement = document.getElementById("current-round");

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", playRound);
    paperButton.addEventListener("click", playRound);
    scissorsButton.addEventListener("click", playRound);

    function playRound() {
        if (currentRound < 5) {
            const userInput = this.id;
            const computerChoice = getComputerChoices();
            const winner = determineTheWinner(computerChoice, userInput);

            userChoice.textContent = userInput;
            computerChoicePrint.textContent = computerChoice;
            winnerResult.textContent = winner;

            if (winner === "user") {
                userScore++;
            } else if (winner === "computer") {
                computerScore++;
            }

            userScoreElement.textContent = userScore;
            computerScoreElement.textContent = computerScore;

            currentRound++;
            currentRoundElement.textContent = currentRound;

            if (currentRound === 5) {
                showGameResult();
            }
        }
    }

    function showGameResult() {
        if (userScore > computerScore) {
            alert("Tebrikler, sen kazandın!");
        } else if (computerScore > userScore) {
            alert("Üzgünüm, bilgisayar kazandı.");
        } else {
            alert("Berabere!");
        }
    }
});

