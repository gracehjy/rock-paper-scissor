//create variables for user input and comp moves
let userMove = prompt("Pick a move: ").toLowerCase();
let moves = ["rock", "paper", "scissor"];

//create a function that randomly generates a move
function randomMove() {
    return moves[parseInt((Math.random()*3))];
}

let compMove = randomMove();
console.log("Computer's move: "+compMove);

//create a function that checks for a win
function checkForWin(userMove, compMove){
    if(userMove === "rock" && compMove === "scissor"
    || userMove === "scissor" && compMove === "paper"
    || userMove === "paper" && compMove === "rock"){
        console.log("You win!");
        return true;
    }
    else if(compMove === "rock" && userMove === "scissor"
    || compMove === "scissor" && userMove === "paper"
    || compMove === "paper" && userMove === "rock"){
        console.log("You lost! Better luck next time...");
        return true;
    }
    else{
        console.log("Tie!");
        return false;
    }
}

//while the there hasn't been a win, randomly generate a move and ask the user for input
let win = checkForWin(userMove, compMove);
while(win === false){
    userMove = prompt("Pick a move: ").toLowerCase();
    compMove = randomMove();
    console.log("Computer's move: "+compMove);
    win = checkForWin(userMove, compMove);
}