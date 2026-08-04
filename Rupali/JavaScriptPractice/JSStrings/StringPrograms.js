//program to print number of vowels

var s1 = "We are learning Javascript";
var vowels ="aeiouAEIOU"
var count =0;

for(var val of s1){
    if(vowels.includes(val)){   
        count +=1;
}
}
console.log("number of vowels:", count)

//******************************************* *//

var s2 = "Javascript";

console.log("first 2 letters:", s2.slice(0,2), " and last 2 characters:", s2.slice(7,9))


//******************************************* *//


//write a program to print 1st char twice
var str1 ="Rohit Virat Vaibhav Abhishek Surya"

var result_array = str1.split(" ")
//var output = " "
for (let word of result_array) {
   // console.log(word)
    var firstChar =word[0]
    var newWord =`${firstChar}${word}`
    console.log(newWord)
} 


//*********************************************//

// remove duplicate words
var str2 = "Rohit Virat Vaibhav Abhishek Surya Rohit Surya";

var words = str2.split(" ");
console.log(words);
var result = [];

for (var word of words) {
    if (!result.includes(word)) {
        result.push(word);
    }
}
console.log(result);

// remove duplicate characters from string

var str = "cricket is lovely game to play"
var output = ""
for(var chr of str){
    if(output.includes(chr))
    {
        continue
    }else{
        output += chr
    }
}
console.log("output:", output)


//1. Get the First and Last 2 Characters



