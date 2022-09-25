const actors = [
    {name: 'Johny', netWorth: 100000},
    {name: 'Amber', netWorth: 10},
    {name: 'Dicaprio', netWorth: 1200000},
    ]

let result = console.log(actors.filter(actor => actor.netWorth > 10));
let names = console.log(actors.map(actor => actor.name).join(' , '));       