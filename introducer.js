const introducer = (name, nature) => {
    const person = {
        name: name,
        nature: nature
    }

    const intro = `I am ${person.name} and I am an ${person.nature} person`;  //${} are template literals
    return intro;
}

console.log(introducer('Sarfraz', 'Excellent'));  