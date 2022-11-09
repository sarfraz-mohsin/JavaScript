import fs from "fs";
//let buffer = fs.readFileSync("childProcess.js"); //It gives us binary data of our file
//console.log("bin data" + buffer); //Add + so the data is in human readable file and not binary

//files-> create, read, update, delete

//fs.openSync("abc.txt", "w"); to create a file in reading mode

fs.writeFileSync("abc.txt", " hum aaj bhot khush hai");
