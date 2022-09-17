//in-line comments
/* multiline commnets*/
/*Data types in js- undifined, null, boolean, string, symbol, number and object*/
console.log("hello world")

//Declaration of a data type can be done by 3 ways- var(it can be used throughout the whole program), let(it can only be used inside a scope), and const(it can never be changed)

var myName= "Sarfraz"
let ourName= "Mohsin"
const pi= 3.14

//adding, subtracting, multiplying, dividing two numbers in js is
var sum= 10+2;
var sub= 10-4;
var mul= 10*4;
var div=10/5;

//Increment and decrement operators and remainder 

var inc=0; inc++;
var dec=0; dec--;
var rem= 5%3;

//compound assignment

var com= 5;
com+=5 // this would give me 10 
com-=3 //this would give me 2 and same with the multiplication and divdision

//assigning a string

var name= "Sarfraz";

//use of escape to have qoutes inside a statement \

var add= "I live in \"Delhi\""
console.log(add);

//Or we can instead use single quotes

var add2= 'I live in "Delhi" ';
console.log(add2)

/* few handy things to remeber are  
\'  single quotes
\" double quotes
\\ backslash
\n newline
\r carriage reture
\t tab
\b backspace
\f form feed
*/

//string concatination using + operator or we can also use the += operator

var firstName= "Sarfraz";
var secondName= "Mohsin";
var fullName= "Sarfraz"+"Mohsin";
console.log(firstName+secondName);

//we can append variables to strings

var str1= "have a good day"
var str2= "nice to meet you"
str2 += str1;

//find length of a string (it can be easily done by .length)


console.log(firstName.length); //or
var greetLen= 0;
var greet= "Hey!";
greetLen= greet.length;
console.log(greetLen);

//Bracket notation to find the number of the character in the string

var firstLetter= firstName[0];
console.log(firstLetter);

//String immutability(We can never change a string using indexing we can only change it by reassigning)

firstName = "Asif" //Correct
//firstName[2]= "K"; //Incorrect 

//How to know the nth character of a string using -1

console.log(firstName.length-1);

//Word Blanks and a Mad libs game

function wordBlanks(myNoun, myAdjective, myVerb, myAverb)
{
    var result= "The "+ myAdjective + " " + myNoun + " " + myVerb +" to the store " + myAverb; 
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"))

