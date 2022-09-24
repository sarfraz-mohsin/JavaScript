const wordFrequency = (phrase) => {
    let frequency = {

    }

    words = phrase.split(' ');

    for(word of words){
        if(word in frequency){
            frequency[word]++
        }
        else{
            frequency[word] = 1;
        }
    }

    return frequency;
}

console.log(wordFrequency('How are you today! what are you going to do today!'));