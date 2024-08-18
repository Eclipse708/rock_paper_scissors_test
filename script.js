let cRpc = ['rock', 'paper', 'scissors'];

const body = document.querySelector('body');
const btn1 = document.createElement('button');
btn1.textContent = 'Rock';
const btn2 = document.createElement('button');
btn2.textContent = 'Paper';
const btn3 = document.createElement('button');
btn3.textContent = 'Scissors';
body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(btn3);


const scoreDiv = document.createElement('div');
body.appendChild(scoreDiv);

const finalScoreDiv = document.createElement('div');
body.appendChild(finalScoreDiv);

const resultDiv = document.createElement('div');
body.appendChild(resultDiv);


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let computedChoice = cRpc[choice];
    // console.log('Array ' + Array.isArray(computedChoice));
    return computedChoice;
}

function getHumandChoice() {
    let userChoice = prompt("Please pick one: rock, paper, scissors");
    UserChoiceLowerCase = userChoice.toLowerCase();
    return UserChoiceLowerCase;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
function playRound(humanChoice, computedChoice) {
        // for (let i = 0; i >= 5; i++ ) {
        
        if (humanChoice == computedChoice) {
            // console.log('draw');
        }
        else if ((humanChoice == "rock") && (computedChoice == 'paper')) {
            console.log('human choice is: ' + humanChoice + ' and computer choice is: ' + computedChoice);
            computerScore++;
            // console.log('computer won');
            scoreDiv.textContent = 'computer score is: ' + computerScore + ' while human score is: ' + humanScore;
        }
        else if ((humanChoice == "paper") && (computedChoice == 'scissors')) {
            console.log('human choice is: ' + humanChoice + ' and computer choice is: ' + computedChoice);
            computerScore++;
            // console.log('computer won');
            scoreDiv.textContent = 'computer score is: ' + computerScore + ' while human score is: ' + humanScore;
        }
        else if ((humanChoice == "rock") && (computedChoice == 'scissors')) {
            console.log('human choice is: ' + humanChoice + ' and computer choice is: ' + computedChoice);
            humanScore++;
            // console.log('human won');
            scoreDiv.textContent = 'computer score is: ' + computerScore + ' while human score is: ' + humanScore;
        }
        else if ((humanChoice == "scissors") && (computedChoice == 'paper')) {
            console.log('human choice is: ' + humanChoice + ' and computer choice is: ' + computedChoice);
            humanScore++;
            // console.log('human won');
            scoreDiv.textContent = 'computer score is: ' + computerScore + ' while human score is: ' + humanScore;
            }
        // }

    finalScoreDiv.textContent = 'Final Score: Computer: ' + computerScore + ' : Human ' + humanScore;

    if (humanScore === 5) {
        resultDiv.textContent = "Human won";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        resultDiv.textContent = 'computer won';
        computerScore = 0;
        humanScore = 0;
    }
    // else if (humanScore == 5 || computerScore == 5) {
    //     resultDiv.textContent =  'Match was a draw';
    // }
    }

    btn1.addEventListener('click', function(){
        playRound('rock', getComputerChoice());
    });
    btn2.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });
    btn3.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });
}

playGame();
// let userChoice = getHumandChoice();
// console.log("user choice " + userChoice);
// let choice = getComputerChoice();
// console.log("choice is: " + choice);