let userNum = Number.parseInt("We have a random number between 1-20, let's see how fast you can guess, Enter your number below")

let ourNum = Math.floor(Math.random()*20) +1

let noOfTries=0;

while(ourNum != userNum){
    if(userNum>ourNum){
        console.log("Your number is greater than our number, please try again")
    }
    else{
        console.log("Your number is smaller than our number, please try again")
    }
    noOfTries++
}

console.log("Congatulations you won the game, your score is : " + 20-noOfTries + " out of 20.")
