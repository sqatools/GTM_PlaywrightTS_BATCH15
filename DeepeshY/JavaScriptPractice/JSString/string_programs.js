// Q1 : remove duplicate characters from
var str1  ="Cricbuzz is not associated"
var output = "" // Cr

for (var chr of str1) { // Cricbuzz, 

    if (output.includes(chr)) {
      continue   
    } else {
        output += chr // output = output + char
    }

}
console.log("ouput :", output)


// Q1 : write a program to count the number of vowels in given.
var s2 = "we are Learning JavaScript"
var count = 0
var vowels = "aeiouAEIOU"
for(var char of s2) {
    if(vowels.includes(char)) {
        count += 1
    } else {
        continue
    }
}
console.log("Total count :", count)


console.log("#########################################")
// Q3 : write a program to repeat the first character of each word twice.
var str1 = "Rohit Virat Vaibhav Abhishek Surya"
// output = "RRohit VVirat VVaibhav AAbhishek SSurya"
var output = ""
const words_array = str1.split(" ")
console.log("word_array :", words_array)
for(var word of words_array) {
    console.log(word)
    var first_char = word[0]
    var newWord = `${first_char}${word}`
    output = output + " "+newWord
}
console.log(output) //  RRohit VVirat VVaibhav AAbhishek SSurya


// Q4 : write a program to get first last character of each word.
var str1 = "Rohit Virat Vaibhav Abhishek Surya"
// output = "Rt Vt Vv Ak Sa"

console.log("H".repeat(5))


//Q5 : write a program to remove duplcates words from given string.

var str1 = "Rohit Virat Vaibhav Surya Rohit Abhishek Surya Virat"
// output = Rohit Virat Vaibhav Abhishek Surya"


var array1 = [4, 5, 6, 8] 
array1.forEach((y) => {
  console.log(y**2)  
});p

console.log("##################################")
/*
8. Find the Most Frequently Repeated Character
Description: Find the character with the highest frequency.
*/

var Input= "mpromgrammingppm"
var MFchar = ""
var MCOunt = 0
var output = {}
for(var char of Input) {
    if (Object.hasOwn(output, char)) {
        output[char] += 1
        if (output[char] >= MCOunt) {
            MCOunt = output[char]
            MFchar = char
        }
    } else {
        output[char] = 1
    }
    console.log("Max frequency character :", MFchar, MCOunt)
}
console.log(output)
console.log("Max frequency character :", MFchar, MCOunt)