const result = document.querySelector('.display-result');

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

    if((userMove == 'rock' && computerMove =='rock') || (userMove =='scissors' && computerMove == 'scissors') || (userMove == 'paper' && computerMove == 'paper')) {
        result.textContent = "It's a Tie!"
     return 'none';
    }
    else if(userMove == 'rock' && computerMove == 'scissors') {
        result.textContent ='You win! Rock beats scissors!';
        return 'user';
    }
    else if(userMove == 'scissors' && computerMove == 'paper') {
        result.textContent ='You win! Scissors beats Paper!';
        return 'user';
    }
    else if(userMove == 'paper' && computerMove == 'rock') {
        result.textContent ='You win! Paper beats Rock!';
        return 'user';
    }
    else if(computerMove == 'rock' && userMove == 'scissors') {
        result.textContent ='You Lose! Rock beats scissors!';
        return 'computer';
    }
    else if(computerMove == 'scissors' && userMove == 'paper') {
        result.textContent ='You Lose! Scissors beats Paper!';
        return 'computer';
    }
    else if(computerMove == 'paper' && userMove == 'rock') {
        result.textContent ='You Lose! Paper beats Rock!';
        return 'computer';
    }
    else result.textContent ='something went horribly wrong!';
}

function game() {

    let winner;
    const userScore = document.querySelector('div.user-score');
    const computerScore = document.querySelector('div.computer-score');

    let user = 0;
    let computer = 0;

    userScore.textContent = user;
    computerScore.textContent = computer;

    const buttons = document.querySelectorAll('.game-ui button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {

            if(user !== 5 && computer!==5) {
                winner = playRound(computerMove = computerPlay(), userMove = e.target.getAttribute('data-key').toLowerCase());

                if(winner === 'user') {
                    user += 1;
                    userScore.textContent = user;
                }
                else if (winner === 'computer') {
                    computer+= 1;
                    computerScore.textContent = computer;
                }

                if(user === 5) {
                    setTimeout( ()=> {
                        result.textContent = 'You Win!';
                        userScore.classList.toggle('winner');
                    }, 1500);  
                }
                else if(computer === 5) {
                    setTimeout( () => {
                        result.textContent = 'You Lose!';
                        computerScore.classList.toggle('winner');
                    }, 1500);    
                }
            }

            else {
                console.log(e);
                alert('reload for new game!');
                return;
            }
        });
    });
}

game();
