//map-loops and returns an array

const mapping = (numbers) =>{
    return numbers.map(number => number*2)
}

console.log(mapping([1,2,4,5]));

//filter- loops and returns an array with matiching conditions

const nums = [1,2,3,4,5];
console.log(nums.filter(num => num>3));

//reduce