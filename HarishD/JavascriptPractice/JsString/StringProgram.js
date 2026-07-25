// Q1 : remove duplicate characters from string
var str1 = "Cricbuzz is not associated"
var output = "" // Cr

for (var chr1 of str1) { // Cricbuzz, 

    if (output.includes(chr1)) {
        continue
    }
    else {
        output += chr  // output = output + char
    }

}

console.log("ouput :", output)


console.log("################################")
// write a program to count vowel in the string

var str2 = "we are learning javascript"
var vowels = "aeiou";
var count = 0
for (var chr2 of string) {
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


// 10. Replace Every Second Occurrence of a Character with ‘$

var num = [20, 50, 10, 30, 80, 40, 60, 5];
var largest = num[0];

for (var i = 0; i < num.length; i++) {
    if (num[i] > largest) {
        largest = num[i];
    }
}

console.log(largest);




