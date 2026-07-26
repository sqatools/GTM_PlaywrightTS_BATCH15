// Q1 : remove duplicate characters from string
var str1 = "Cricbuzz is not associated";
var output = "";

for (var chr1 of str1) {

    if (output.includes(chr1)) {
        continue;
    }
    else {
        output += chr1;
    }

}

console.log("output :", output);

console.log("################################")
// write a program to count vowel in the string

var str2 = "we are learning javascript"
var vowels = "aeiou";
var count = 0
for (var chr2 of str2) {
    if (vowels.includes(chr2)) {
        count++
    }
}

console.log("vowels of given string :", count)

//1. Get the First and Last 2 Characters
var str1 = "JavaScript";

if (str1.length < 2) {
    console.log("");
} else {
    let firstTwo = str1.substring(0, 2);
    let lastTwo = str1.substring(str1.length - 2);
    let result = firstTwo + lastTwo;
    console.log(result);
}


// Find the a lrgest of array 
var num = [20, 50, 10, 30, 80, 40, 60, 5];
var largest = num[0];

for (var i = 0; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i];
    }
}

console.log(largest);


// 2. Find the Length of the Longest String in an Array


var str2 = ["Java", "Programming", "Code"]
var largest = " "
for (var i = 0; i < str2.length; i++) {
    if (str2[i].length > largest.length) {
        largest = str2[i]
    }

}
console.log(largest)

//3. Repeat the Last Two Characters Four Times

var str3 = "coding"

var store = str3.substring(str3.length - 2)

var result = store.repeat(4)
console.log(result)




