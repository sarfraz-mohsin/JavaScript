//Objects {} have properties

const person = {
    name: 'Sarfraz', 
    shirt: 'white'
}

console.log(person.name); //dot notation to access an object
console.log(person['shirt']); //bracket notation to access an object

person.phone = "700234fs" //Explicitly assinging property to an object

//Calling the whole object

console.log(person);