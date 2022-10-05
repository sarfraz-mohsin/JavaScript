function rollDice(){
    let randomNumber = Math.floor( Math.random()*6)+1
    return randomNumber;
}    

//console.log(rollDice());


function getRandonCard(){
    let randomCard = Math.floor(Math.random()*9)+2;
    return randomCard;
}

console.log(getRandonCard());