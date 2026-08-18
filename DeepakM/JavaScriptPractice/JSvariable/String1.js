//Write a JavaScript program to create a new string using the first 2 and last 2 characters of a given string. 
// If the string length is less than 2, return an empty string.
//Input: "JavaScript"
//Expected Output: "Japt"

var input = "Javascript"
var output;

var firsttwo=input.slice(0,2)
var lastwo=input.slice(-2)

console.log("Output:", firsttwo+lastwo)

