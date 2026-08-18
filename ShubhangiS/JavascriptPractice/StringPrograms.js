// count number of vowels in given string:

var s2= "We are Learning JavaScript"

var count=0;

for(var i=0; i<s2.length; i++) {

    if(s2[i]=="a" || s2[i]=="e" || s2[i]=="i" || s2[i]=="o" || s2[i]=="u" || s2[i]=="A" || s2[i]=="E" || s2[i]=="I" || s2[i]=="O" || s2[i]=="U") {

        count++;
    }
}
console.log("Total number of vowels: "+count)

// program to repeat first character of word twice:

var str= "Anay Anish Shubhangi Vishvesh"

var words = str.split(" ");

var result = "";

for(var i=0; i<words.length; i++) {
    var firstChar = words[i].charAt(0);
    var modifiedWord = firstChar + firstChar + words[i].slice(1);
    result += modifiedWord + " ";
}
console.log("Modified string: " + result);

// program to get first last character of each word in string:

var str= "Anay Anish Shubhangi Vishvesh"
var words = str.split(" ");
var result = "";

for(var i=0; i<words.length; i++) {
    var firstChar = words[i].charAt(0);
    var lastChar = words[i].charAt(words[i].length - 1);
    result += firstChar + lastChar + " ";
}
console.log("String with first and last characters: " + result);

// program to remove duplicate word from string

var str1= "Rohit Virat Vaibhav Surya Rohit Abhishek Surya Virat"
var words = str1.split(" ");
var output = "";

for (var word of words) { 

    if (output.includes(word)) {
      continue   
    } else {
        output += word + " ";
    }

}
console.log("output : ", output)

// Write a JavaScript program to create a new string using the first 2 and last 2 characters of a given string. If the string length is less than 2, return an empty string

var str= "Javascript"

if(str.length < 2){
    return ""

}else{

    resultstr=  str.substring(0, 2) + str.substring(str.length - 2)
    console.log("Result string is : " + resultstr);
}


// program to find the length of the longest string from an array of strings.

var input=["Java", "Programming" ,"code"]

var maxlength=0

for (var word of input){

    if(word.length> maxlength)

        maxlength=word.length
}
console.log("Length of the longest string is : " + maxlength)

// program to create a string made of four copies of the last two characters.

var input= "coding"

var output= input.substring(input.length-2)

console.log(output.repeat(4))

// Reverse the string only if its length is divisible by 4

var input= "code"

 var reverse=""

if(input.length % 4 ==0){


    for(var i= input.length-1; i>=0; i--){
reverse += input.charAt(i)

    }
    console.log("Reverse string is: " + reverse)
}else{

    console.log("As length is not divisible by 4 do not Reverse string ")
}

// Count how many times a substring appears inside a string.

var input= "banana"

var substr= "an"
var count=0

for(var i=0; i<input.length; i++){

    if(input.substring(i, i + substr.length) === substr){
        count++;
    }
}
console.log("Number of occurrences of substring: " + count)

// Determine whether a given alphabet is a vowel or consonant.

var input= "g"

var vowels= "aeiouAEIOU"


    if(vowels.includes(input)){

        console.log("Given character is vowel")
    }else{
        console.log("Given character is not vowel")
    }


   //  Find the longest and shortest words in a sentence

   var sentence = "I love learning JavaScript"

    var words = sentence.split(" ")

     var longest = words[0];
    var shortest = words[0];

     for (var i = 1; i < words.length; i++) {

        if (words[i].length > longest.length) {
            longest = words[i];
        }

        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    console.log("Longest Word: " + longest);
    console.log("Shortest Word: " + shortest);


    // Find the character with the highest frequency.
    var input= "Programming"
var MFchar = ""
var MCOunt = 0
var output = {}
for(var char of input) {
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


    // Find the length of a string using loop logic only

    var input= "Java"

    var length= 0;
    for(var ch of input){
        input.charAt(ch)
        length++
        
    }
    console.log("length is:", length)

    // Check whether the given string reads the same forwards and backwards.

     var input="madam"

    var rev= ""
    for(var i= input.length-1; i>=0; i--){

        rev= rev + input.charAt(i)
    }
    console.log("Reverse string is: " + rev)

    if(input===rev){
console.log("String is Palindrome:")

    }else{
        console.log("String is not Palindrome:")
    }

    // Reverse all characters of the string.
    var input="Hello"

    var rev= ""
    for(var i= input.length-1; i>=0; i--){

        rev= rev + input.charAt(i)
    }
    console.log("Reverse string is: " + rev)


    // Join two strings together:

    var str1="Hello"
    var str2="World"
    var joined=str1 + str2
    console.log("Joined string is: " + joined)

    //  Display characters at even index positions.
    input="Javascript"

    for(var i=0; i< input.length; i++){

        if(i%2==0){

            console.log("Even characters:" + input.charAt(i))
        }
    }


   // Determine whether the string contains any numeric digit.

   var input="code123"

   var hasDigit = false;

   for(var i=0; i< input.length; i++){

   if(input.charAt(i) >= "0" && input.charAt(i) <= "9"){
            hasDigit = true;
            break;

   }
}
    if(hasDigit){
        console.log("String contains numeric digit")
    }else{
        console.log("String does not contain numeric digit")
    }

    // Count all consonants present in the string.

    var s2 = "JavaScript"
var count = 0
var vowels = "aeiouAEIOU"
for(var char of s2) {
    if(!vowels.includes(char)) {
        count += 1
    } else {
        continue
    }
}
console.log("Total consonent count :", count)

// Display characters at odd index positions.

var input= "abcdefg"
for(var i=0; i< input.length; i++){

        if(i%2!==0){

            console.log("Odd characters:" + input.charAt(i))
        }
    }


    // convert all lowercase letters of a string into uppercase.

    var input= "I live in Pune"

    var upper= input.toUpperCase()

    console.log("Upeercase: " + upper)


    // find the position of a specified word in a sentence.

   var  Sentence= "I am solving string problems"
    var input= sentence.split(" ")

   var result= input.indexOf( "problems")

   console.log("Result is: " + result)