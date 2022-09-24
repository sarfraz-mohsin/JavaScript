const sum = () =>{
    let result = 0;
    let arr1 = [1, 5, 7, 3, 8];

    for(element of arr1){
        result+= Number(element);
    }

    return result;
}

console.log('The sum of your array is ', sum());