let firstname= 'sarfraz'
let lastname= 'moshin'

let fullname= firstname+lastname
//console.log(fullname)

let name = 'linda'
let greeting = 'how are you'

function greetings(){
    //console.log(greeting+", "+name+" !");
}

greetings();

let myPoints = 0;

function add3Points(){
    myPoints+=3;
}

function remove1Point(){
    myPoints-= 1;
}

add3Points()
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

//console.log(myPoints)

let error = document.getElementById('error');

function errors(){
    //error.innerHTML = 'Something went wrong, Please try again !'
}

let num1 = 8;
let num2 = 2;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let result = document.getElementById('result');

function add(){
    let total = num1 + num2
    result.innerHTML = 'Result is : ' + total; 
}

function subtract(){
    let total = num1 - num2
    result.innerHTML = 'Result is : ' + total; 
}

function multiply(){
    let total = num1 * num2
    result.innerHTML = 'Result is : ' + total; 
}

function divide(){
    let total = num1/num2
    result.innerHTML = 'Result is : ' + total; 
}
