let cap = {
  name: "Steve",
  lastName: "roggers",
  address: {
    city: "manhatten",
    state: "new Yourk",
  },
  age: 35,
  isAvenger: true,
  movies: ["first avenger", "winter soldier", "civil war"],
  sayHi: function () {
    console.log("Cap say's Hi");
  },
};

//GET

// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[0]);
// cap.sayHi();
// console.log("cap: ", cap);

//UPDATE/SET

// cap.age = 26;
// cap.isAvenger = false;
// cap.friend = ["tony", "Bruce", "peter"];
// console.log("`````````````````````````");
// console.log("cap: ", cap);

//DELETE

// delete cap.address;

for (let key in cap) {
  console.log(key, " : ", cap[key]);
}

console.log(Object.keys(cap));
