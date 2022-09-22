const introducer = (name, nature) => {
    const person = {
        name: name,
        nature: nature,
        assets: 1000000,
        liabilities: 30000,
        /* what we can never do is 
        netWorth = persn.assets-person.liabilities(since this whole code runs at the same time and the computer wont know there is any such thing ) what we should do is */
        netWorth: function(){                        //function inside an object is called method
            return this.assets-this.liabilities;
        }
    }

    const intro = `I am ${person.name} and I am an ${person.nature} person and my net worth is ${netWorth}`;  //${} are template literals
    return intro;
}

console.log(introducer('Sarfraz', 'Excellent')); 