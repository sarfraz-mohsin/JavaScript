const letterFrequency = (phrase) => {
    //frequency object
    let frequency = {

    }

    for(letter of phrase){
        if(letter in frequency){
            frequency[letter]+= 1;
        }
        else{
            frequency[letter] = 1;
        }
    }

    return frequency;
}

console.log(letterFrequency('Izmaaaa'));