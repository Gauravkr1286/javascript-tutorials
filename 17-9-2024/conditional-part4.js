// rewrite the two try version of the progra with the following changes
// check if the number is within range first b/w 1 and 10
// use less repetation of code

let number=5;

let guess= prompt("Guess the number between 1 and 10");

//checking if the guess is greater than, or = 1 AND less than or =  10
//Logical AND %% - evaluate to true if all conditions are true.
if(guess >= 1 && guess <10){
    if(guess==number){
        alert("You guesses it correctly on your first try.");
    }
    //if too high or low
else {
    // it will guess a new guess
    let HighorLow; //new variable


if (guess> number){

    //we cannot declare a variable here because it will not be accessible outside if clause.

    // Variable have block scope, which means only exist in the part of the program where they have been declared.
HighorLow=" high";
}
else if (guess < number){
    HighorLow=" low";
    }

    guess=prompt("Your guess is loo"+ HighorLow + ". Try again later")
    if (guess==number){
        guess=prompt("You got it on second attempt...");
        }
}
}else {
    alert("Wrong answer");
}