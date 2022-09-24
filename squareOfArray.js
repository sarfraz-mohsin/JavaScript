const square = (numbers) => {
    let result = [];
    for(const number of numbers){       
        result.push(number*number); //or we can do number**2
    }
    return(result);
}

console.log(square([1, 2, 3, 4, 5]));