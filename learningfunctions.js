function fortytwo(){
    console.log('42');
}

//fortytwo();

let lap1 = 20;
let lap2 = 30;
let lap3 = 40;

function totalaps(){
    let total = lap1+lap2+lap3;
    //console.log(total);
}

totalaps();

let lapcounter = 0;

function laps(){
    lapcounter += 1;
}

laps();
laps();
laps();

console.log(lapcounter)