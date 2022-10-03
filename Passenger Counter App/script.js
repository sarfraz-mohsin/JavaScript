let count = 0;

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

function increment(){
    count += 1;
    countEl.innerHTML = count;
}

function save(){
    let total = count + ' - ';
    saveEl.innerHTML += total;
    count = 0;
    countEl.innerHTML = 0;
}

