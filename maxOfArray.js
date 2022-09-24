const max = (numbers) =>{
    let result= numbers[0];
    for(const element of numbers){
        if(element>result){
            result= element;
        }
    }
    return result;
}

console.log('maximum of the array is ', max([1, 2, 6, 9, 5, 7]));