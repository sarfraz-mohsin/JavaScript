const marks = {
    sarfraz : 98,
    asif: 74,
    rizwan: 93
}

//Problem no 1

for(let i=0; i<Object.keys(marks).length; i++){
    //console.log("The marks of " + Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]])
}


//Problem no 2

for(key in marks){
    //console.log("The marks of "+ key + " are "+ marks[key])
}

//Problem no 3

let cn = 56
let i
//while(i!==cn){
    //console.log("try again")
    //prompt("enter the correct number")
//}
//console.log("You have entered the correct number")

//Problem 4

function mean(a,b,c,d,e){
    let result = (a+b+c+d+e)/5
    return result
}


console.log(mean(4,6,7,2,7))