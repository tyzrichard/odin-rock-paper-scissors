function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3) 
    if (choice === 0) {
      return "Rock"
    } else if (choice === 1) {
      return "Paper"
    } else {
      return "Scissors"
    }
}

function playGame () {
    let humanScore = 0, computerScore = 0
    let round = 1
  
    function playRound (humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log(`Both players chose ${humanChoice}, resulting in a tie!`)
      } else if ((humanChoice == 'Rock' && computerChoice == 'Scissors') || (humanChoice == 'Scissors' && computerChoice == 'Paper') || (humanChoice == 'Paper' && computerChoice == 'Rock')) {
        console.log(`You win! Your ${humanChoice} beats the opponent's ${computerChoice}.`)
        humanScore++
      } else if (humanChoice == 'Rock' || humanChoice == 'Scissors' || humanChoice == "Paper"){
        console.log(`You lose! The opponent's ${computerChoice} beats your ${humanChoice}.`)
        computerScore++
      } else {
        console.log("Invalid Input, please try again.")
        round--
      }
      round++
    }

    while (round <= 5) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection)
    }
    
    if (humanScore > computerScore) {
      console.log(`Congratulations! You win ${humanScore}:${computerScore}.`)
    } else if (computerScore > humanScore) {
      console.log(`Oops! You lost ${computerScore}:${humanScore}. Better luck next time!`)
    } else {
      console.log(`Its a tie! The final score is ${humanScore}:${computerScore}`)
    }
}

// const scissors = document.querySelector(".scissors");
// const paper = document.querySelector(".paper");
// const rock = document.querySelector(".rock");
// const lizard = document.querySelector(".lizard");
// const spock = document.querySelector(".spock");

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("testing");
});
console.log("hellloo")
console.log(choices);
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      alert("yes");
    });
});
  