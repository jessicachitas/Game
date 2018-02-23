// Creating a game where the player has to guess a secret number and tell the user if its 
// larger/smaller/equals to the secret value.

// 1. Declare the secret value
var guess = 4
var count = 3

// 2. Have a user imput a value & 3. Tell user if this is higher/lower/equal to that secret value.
function printNumber(guess) {
    while(count > 0 && guess != line){
        var line = window.prompt("Guess a Number...");
        console.log(line);

        if (line == guess) {
            window.alert("correct!");
            count = 0
        }
        else{
            window.alert("incorrect, try again :(");
            count--
        } 
    }
} 
printNumber(guess)
