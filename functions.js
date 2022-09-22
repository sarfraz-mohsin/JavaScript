//Sum function using arrow function

const sum = (a,b) => a+b; // Implicit return
console.log(sum(5,6));

const sum2 = (a,b) =>{      // Ecplicit return
    return a+b;
}

//Sum function without using arrow

function sum3(a,b){
    const total = a+b;
    return total;
} 

console.log(sum3(10,20));

//Arrow function for subtract

const sub = (a,b) => a-b;

//Arrow function for multiplication

const mul = (a,b) => a*b;

//Arrow function for division

const div = (a,b) => a/b;

