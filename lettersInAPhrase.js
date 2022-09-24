const howManyLetters = () =>{

    let result = 0;
    const phrase = 'I am fine thank youo!';
    for(letter in phrase){
        console.log(Number(letter)+1);
        result = Number(letter)+1;
    }

    return {result}
}

console.log(howManyLetters());