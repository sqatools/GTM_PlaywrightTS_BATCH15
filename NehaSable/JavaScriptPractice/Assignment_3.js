//Write a JavaScript program Repeat the Last Two Characters Four Times
var str="coding"

var lastTwoChars=str.slice(-2);
var result=lastTwoChars.repeat(4);
console.log("The string made of four copies of the last two characters is: ", result);

//Write a program to reverse a string if its length is a multiple of 4
var str="Code";
if(str.length % 4 === 0){
    var result=str.split("").reverse().join("");
    console.log("The reversed string is: ", result);
}
else{
    console.log("The length of the string is not a multiple of 4");
}
//Check Whether a Character is a Vowel or Consonant
var char="N"
var vowels=
"aeiouAEIOU";
if(vowels.includes(char)){
    console.log("The character is a vowel: ", char);
}
else{
    console.log("The character is a consonant: ", char);
}


//Write a program to find the longest and shortest word in a string
var char="I love learning javascript"
var words=char.split(" ");
var LongestWord=words[0];
var ShortestWord=words[0];
for(var i=1; i<words.length; i++){
if(words[i].length > LongestWord.length){
    LongestWord=words[i];
}
else if(words[i].length < ShortestWord.length){
    ShortestWord=words[i];
}
console.log("The longest word is: ", LongestWord);
console.log("The shortest word is: ", ShortestWord);
}
//Exchange the first and last characters of the string.
var char="JavaScript"
var firstChar=char[0];
var lastChar=char[char.length-1];
var result=lastChar+char.slice(1,-1)+firstChar;
console.log("The string after exchanging the first and last characters is: ", result);

//Combine Two Strings
var str1="Hello"
var str2="World"
result=str1+str2;
console.log("The combined string is: ", result);

//Check Whether the String Contains Numbers
var str="Code123"
var numbers="123";
if(str.includes("123")){
    console.log("The string contains numbers: ", numbers);
}
else{
    console.log("The string does not contain numbers: ", numbers);
}

var ConsumerDetails={
Rahul:200,
Mohan:250,
Ravi:300,
Rohan:350,
Raghav:400
}
//TotalUnit<=100 then charges is 25 reupee
//TotalUnit>=100 and <=300 then charges is 50 Rupee
//TotalUnit>300 per unit is 100 

for(var consumer in ConsumerDetails){
if(ConsumerDetails[consumer]<=100){
    var charges=25;
    console.log("Consumer: ", consumer, "Total Unit: ", ConsumerDetails[consumer], "Charges: ", charges);
    if(ConsumerDetails[consumer]>=100 && ConsumerDetails[consumer]<=300){
        var charges=50;
        console.log("Consumer: ", consumer, "Total Unit: ", ConsumerDetails[consumer], "Charges: ", charges);
    }
    if(ConsumerDetails[consumer]>300){
        var charges=100;
        console.log("Consumer: ", consumer, "Total Unit: ", ConsumerDetails[consumer], "Charges: ", charges);
    }
}
}
