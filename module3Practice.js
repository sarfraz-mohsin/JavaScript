/*
Exercise 1

const player = "Sarfraz"
const opponent = "per"
const game = "Amazing Figher"
let points = 0
let hasWon = false

points+= 100
hasWon = true

if(hasWon){
    console.log(`${player}  got ${points} points and won the ${game} game!`)
}
else{
    console.log(`the winner is ${opponent} ! ${player} lost the game!`)
} */


/*
Exercise 2

let myCourses = ["Learn Css animations", "UI design fundamentals", "Intro to clean code"]

function render(arr){
    for(let i = 0; i < arr.length; i++)
        console.log(arr[i])
}

render(myCourses)*/

/*
Exercise 3

localStorage.setItem("name","Sarfraz.com")

console.log(localStorage.getItem("name"))*/


/*

Exercise 4

const scoreBtn = document.getElementById('score-btn')

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

scoreBtn.addEventListener('click', function btnPressed(){
    scoreBtn.textContent = data[0].score;
}) */


/* 

Exercise 5

function generateSentense(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `
    let lastIndex = arr.length-1

    for(let i = 0; i< arr.length; i++){
        if( i === lastIndex){
            baseString += arr[i]
        }
        else{
            baseString += arr[i] + ", "
        }
    }
    return baseString;
}


console.log(generateSentense("Largest Countries", ["China", "Russia"]))*/

let imgSection = document.getElementById('image-section')
const imgs = [
    "images/cat1.jpg",
    "images/cat2.jpg.webp",
    "images/cat3.jpg.webp"
]

function render(){
    let imgDOM = ''
    for(let i=0; i<imgs.length; i++){
        imgDOM += `<img class="cat" src="${imgs[i]}" >`
    }

    imgSection.innerHTML = imgDOM
}

render(imgs)
