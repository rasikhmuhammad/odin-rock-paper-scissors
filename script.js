function computerPlay() {
    let computerMove =  Math.floor(Math.random() * 3);
    let computerPlay;
    // console.log(computerMove);

    switch(computerMove) {
        case 0: computerPlay = 'rock';
                break;
        case 1: computerPlay = 'paper';
                break;
        case 2: computerPlay = 'scissors';
                break;
        default: console.log('something went horribly wrong!');
    }
    // console.log(computerPlay);    
    return computerPlay;
}


function playRound(computerMove, userMove) {

    console.log(computerMove, userMove);

    if((userMove == 'rock' && computerMove =='rock') || (userMove =='scissors' && computerMove == 'scissors') || (userMove == 'paper' && computerMove == 'paper')) {
        console.log("It's a Tie!");
     return 'none';
    }
    else if(userMove == 'rock' && computerMove == 'scissors') {
        console.log('You win! Rock beats scissors!');
        return 'user';
    }
    else if(userMove == 'scissors' && computerMove == 'paper') {
        console.log('You win! Scissors beats Paper!');
        return 'user';
    }
    else if(userMove == 'paper' && computerMove == 'rock') {
        console.log('You win! Paper beats Rock!');
        return 'user';
    }
    else if(computerMove == 'rock' && userMove == 'scissors') {
        console.log('You Lose! Rock beats scissors!');
        return 'computer';
    }
    else if(computerMove == 'scissors' && userMove == 'paper') {
        console.log('You Lose! Scissors beats Paper!');
        return 'computer';
    }
    else if(computerMove == 'paper' && userMove == 'rock') {
        console.log('You Lose! Paper beats Rock!');
        return 'computer';
    }
    else console.log('something went horribly wrong!');
}

function game() {

    let winner;
    let userScore = 0; 
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        winner = playRound(computerMove = computerPlay(), userMove = prompt('rock, paper or Scissors?').toLowerCase());
        if(winner == 'user') {
            userScore += 1;
        }
        else if (winner == 'computer') {
            computerScore += 1;
        }
        else if (winner == 'none') {
            continue;
        }
        else {
            console.log('something went horribly wrong!');
            break;
        }
    }

    if (userScore > computerScore) {
        console.log('You win!');
    }

    else if (userScore < computerScore) {
        console.log('you lose!');
    }

    else console.log("it's a tie!");
}

game();
