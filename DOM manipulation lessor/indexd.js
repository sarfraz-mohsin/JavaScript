/*let title = document.getElementById('title')
console.log('before: ', title.innerText)
title.innerText = 'I am good!'
console.log('after: ', title.innerText)
let message = 'I am good'
title.innerHTML =  `<h1>${message}</h1>`
title.style.color = 'red';*/

//A small exercise to learn DOM more

let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let colorBox = document.querySelectorAll('.colorBox');

/*red.onclick = () => console.log('You clicked red');
yellow.onclick = () => console.log('You clicked yellow');
green.onclick = () => console.log('You clicked green'); */ //Insted of doing this we can use the loop and make it easier

console.log(colorBox);

//forEach loop
colorBox.forEach(colorBox => {
    colorBox.onclick = () =>console.log(colorBox.value)
});