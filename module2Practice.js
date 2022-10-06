//Exercise 1

let person = {
    name: 'Sarfraz',
    age: 21,
    country: 'India'
}

function logData(){
    return person.name + " is " + person.age + " years old and lives in " + person.country;
}

//console.log(logData());

//Exercise 2

let countries = ['China', 'India', 'USA','Indonesia', 'Pakistan']

//console.log('5 largest countries in the world :')
for(let i=0; i<countries.length; i++){
    //console.log("- " +countries[i]);
}

//Exercise 3

let countries2 = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']

countries2.shift();
countries2.unshift('China')
countries2.pop()
countries2.push('Pakistan')

for(let i = 0; i<countries2.length; i++){
    //console.log(countries2[i])
}

//Exercise 4

let dayOfMonth = randomDay();
let weekday = 'Friday';

function randomDay(){
   return Math.floor(Math.random*30)+1;
}

if(dayOfMonth === 13 && weekday === 'Friday'){
    //console.log('Spoky Day!')
}
else{
    //console.log('Not a spooky day')
}

//Exercise 5

let hands = ['rock', 'paper', 'scissors']

function randomItem(){
    let randomIndex = Math.floor(Math.random()*3);
    return hands[randomIndex];
}

//console.log(randomItem());

let fruits = ['apple', 'orange', 'apple', 'apple', 'orange']
let appleShelf = document.getElementById('apple')
let orangeShelf = document.getElementById('orange')

function shelf(){
    for(let i=0; i<fruits.length; i++){
        if(fruits[i] === 'apple'){
            appleShelf.textContent += fruits[i]+ ' ';
        }
        else{
            orangeShelf.textContent += fruits[i]+' ';
        }
    }
    
}

shelf();