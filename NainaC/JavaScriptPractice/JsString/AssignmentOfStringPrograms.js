// 1.  Write a JavaScript program to create a new string using the first 2 and last 2 characters of a given string. If the string length is less than 2, return an empty string.
//Input: "JavaScript"
var str1 = "JavaScript"
var output =""
if(str1.legth<2){
    output ="empty string"
} else{
    output = str1.substring(0,2) + str1.substring(str1.length-2)
}
console.log("output:", output)


//2.Write a JavaScript program to find the length of the longest string from an array of strings.
var str1 = ["Java", "Programming", "Code"]
var output = 0
for(var i = 0; i <str1.length;i++)
{
    if (str1[i].length>output){
output= str1[i].length
    }
}
console.log("output:", output)


// Write a JavaScript program to create a string made of four copies of the last two characters.
//Input: "Coding"


//Reverse the string only if its length is divisible by 4
//Input: "Code"


//Count how many times a substring appears inside a string.Computer Science

Input:

String: "banana"
Substring: "an"


// Determine whether a given alphabet is a vowel or consonant.
//Input: "e"


// Find the longest and shortest words in a sentence
//Input:

"I love learning JavaScript"


//8. Find the character with the highest frequency.Mathematics
var Input= "programming"
var MFChar =""
var Output ={}
for(var char of Input){
    if(Object.hasOwn (Output, char)){
        Output[char] +=1
    } else{
        Output[char] =1
    }
}
console.log(Output)





/*//Find the length of a string using loop logic only.

Input: "JavaScript"

Expected Output:

10

//Replace every second occurrence of each repeated character with the $ symbol.Computer Science

Input: "Programming"

Expected Output:

Prog$am$in$


//Exchange the first and last characters of the string.

Input: "JavaScript"

Expected Output:

tavaScripJ



//Exchange the first and last character of each word in a sentence.Programming

Input:

"Online Learning"
Expected Output:

enliOn gearninL


//Count vowels present in every word and display the result as an object.

Input:

"We are learning JavaScript"
Expected Output:

{
We:1,
are:2,
learning:3,
JavaScript:3
}



//Repeat every vowel three times and every consonant twice.

Input: "Code"

Expected Output:

CCooodee

//  Check whether the given string reads the same forwards and backwards.

Input: "madam"

Expected Output:

Palindrome


//Reverse all characters of the string.Programming

Input: "JavaScript"

Expected Output:

tpircSavaJ

//Find the total number of characters in the string.

Input: "Programming"

Expected Output:

11

//Count the occurrences of each character.Computer Science

Input: "hello"

Expected Output:

{
h:1,
e:1,
l:2,
o:1
}


//
//
//
//
//*/
