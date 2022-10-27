const player = {
    currentChoice: null,
}
const computer = {
    currentChoice: null,
}

const choices = ['Lapis', 'Papyrus', 'Scalpellus'];

const randomIndex = Math.floor(Math.random() * choices.length);
computer.currentChoice = choices[randomIndex];
player.currentChoice = choices[0]

if (computer.currentChoice === player.currentChoice){
    console.log("It's a tie!" + computer.currentChoice + player.currentChoice);
} else if (computer.currentChoice === choices[0]){
    if (player.currentChoice === choices[1]){
        console.log("The Player Wins!" + computer.currentChoice + player.currentChoice);
    } else {
        console.log("The Computer Wins!" + computer.currentChoice + player.currentChoice);
    }
} else if (computer.currentChoice === choices[1]){
    if (player.currentChoice === choices[0]){
        console.log("The Computer Wins!" + computer.currentChoice + player.currentChoice);
    } else {
        console.log("The Player Wins!" + computer.currentChoice + player.currentChoice);
    }
} else {
    if (player.currentChoice === choices[0]){
        console.log("The Player Wins!" + computer.currentChoice + player.currentChoice);
    } else {
        console.log("The Computer Wins!" + computer.currentChoice + player.currentChoice);
    }
}

