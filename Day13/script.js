const buttons= document.querySelectorAll("button");

const resultEl = document.getElementById("scores");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerscore =0;
let computerscore =0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const result = playRound(button.id, computerPlay());
      resultEl.textContent = result;
      
    });
  });


  function computerPlay(){
    const choices =["rock","paper","scissors"];
    const randomChoice=Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
  }

  function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return "It's a tie";

    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")

    ){
        playerscore++;
        playerScoreEl.textContent=playerscore;
        return"You win";
    }
    else {
        computerscore++;
        computerScoreEl.textContent = computerscore;
        return "You lose! " ;
      }
    }
  

