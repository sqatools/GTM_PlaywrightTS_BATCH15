//Write a JavaScript program to create a new string using the first 2 and last 2 characters of a given
//  string. If the string length is less than 2, return an empty string.
let str = "Javascript"
if (str.length < 2) {
    console.log("");
} else {
    let result = str.substring(0, 2) + str.substring(str.length - 2);
    console.log(result);
}

//let str = "JavaScript";

// let result1 = str.length < 2 ? "" : str.slice(0, 2) + str.slice(-2);

// console.log(result1);

// ---------------------------------------------------------------------

// Write a JavaScript program to find the length of the longest string from an array of strings.
//  ["Java", "Programming", "Code"]

let arr = ["Java", "Programming", "Code"];

let longest = arr[0];

//console.log(arr[0].length)   // will give leanth of string

for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}

console.log("Longest string:", longest);
console.log("Length:", longest.length);

// reverse string program

let str1 = "Code";
let result = "";

for (let i = str1.length - 1; i >= 0; i--) {
    result = result + str1[i];
}

console.log(result);


let str2 = "Code";
// let splitstr=str2.split((""));
// console.log(splitstr)

let result2 = str2.split("").reverse().join("");

console.log(result2);