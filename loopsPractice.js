for(let count = 10; count<101; count+= 10){
    //console.log(count);
}

let cards = [7, 3, 9]

for(let i =0 ; i< cards.length; i++){
    //console.log(cards[i]);
}

let sentence = ['hello', 'my', 'name', 'is', 'sarfraz'];
let greetingEl = document.getElementById('greeting-el')

for(let i=0; i<sentence.length; i++){
    greetingEl.textContent += sentence[i]+' ';
    console.log(sentence[i]);
}