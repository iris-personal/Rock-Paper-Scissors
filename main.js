const player = {
    currentChoice: null,
}
const computer = {
    currentChoice: null,
}

const choices = ['Lapis', 'Papyrus', 'Scalpellus'];

const randomIndex = Math.floor(Math.random() * choices.length);
computer.currentChoice = choices[randomIndex];
