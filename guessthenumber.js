let gameNum=15;
let guessNum =prompt("GUESS THE NUMBER:");
console.log("THE NUMBER YOU ENTERED IS :", guessNum);

while(guessNum != gameNum) {
    guessNum = prompt("SORRY! GUESS AGAIN:");

}

console.log("CONGRATULATIONS! You have guessed the right number.")