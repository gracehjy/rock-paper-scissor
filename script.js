
//check for a win and update scores
function checkForWin(userMove, compMove){
    document.getElementById('compMove').innerHTML = "The computer chose:";
    document.getElementById('compMoveBox').innerHTML = getCompMoveEmoji(compMove);
    document.getElementById('compMoveBox').style.visibility = "visible";
    if(userMove === "rock" && compMove === "scissor"
    || userMove === "scissor" && compMove === "paper"
    || userMove === "paper" && compMove === "rock"){
        document.getElementById('result').innerHTML = "Result: Congrats, You Won!";
    }
    else if(compMove === "rock" && userMove === "scissor"
    || compMove === "scissor" && userMove === "paper"
    || compMove === "paper" && userMove === "rock"){
        document.getElementById('result').innerHTML = "Result: Sorry, You Lost...";
    }
    else{
        document.getElementById('result').innerHTML = "Result: Tie!";
    }
}

//get compMove
let moves = ['rock', 'paper', 'scissor'];
function randomMove() {
    return moves[parseInt((Math.random()*3))];
}

function getCompMoveEmoji(compMove){
    if(compMove === 'rock'){
        return "✊";
    }
    else if(compMove === 'paper'){
        return "✋";
    }
    else{
        return "✌";
    }
}

//now we make it all actually work lmao
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissor.addEventListener('click', () => game('scissor'));

function game(userMove){
    const compMove = randomMove();
    checkForWin(userMove, compMove);
}