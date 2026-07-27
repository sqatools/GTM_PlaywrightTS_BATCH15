//program to print number of vowels

var s1 = "We are learning Javascript";
var vowels ="aeiouAEIOU"
var count =0;

for(var val of s1){
    if(vowels.includes(val))
        count +=1;
}
console.log(count)

//******************************************* *//

var s2 = "Javascript";

console.log("first 2 letters:", s2.slice(0,2), " and last 2 characters:", s2.slice(7,9))


//******************************************* *//


//write a program to print 1st char twice
var str1 ="Rohit Virat Vaibhav Abhishek Surya"

var result_array = str1.split(" ")
var output = " "
for (let word of result_array) {
    console.log(word)
    var firstChar =word[0]
    var newWord =`${firstChar}+${word}`

   // console.log(word.charAt(0).repeat(2)+result);
} 
output = output + " " + newWord

//******************************************* *//

// //

// var str2 = "Rohit Virat Vaibhav Abhishek Surya Rohit Surya";

// let words = str2.split(" ");
// console.log(words)
// let result = [];

// for (let word of words) {
//     if (result.includes.words) {
//         continue
//     }
//     result=result
// }

// console.log();