//remove duplicate characters from a string

var str1 = "Divya is a good girl"
var output = " "
for(var val of str1){
    if(output.includes(val)){
     continue
    }else{
        output += val
    }
}
console.log(output)


//write a program to count vowels in a given string

var s2 = "we are Learning JavaScript"
var count = 0
var s3 = "aeiouAEIOU"

for(var val of s2){

    if(s3.includes(val))
        {

        count =count + 1
       
        }
    }
 console.log("count of Vowels in the given string:",count)
/*else{

    console("no vowels in the given string")
}*/

//write a program to repeat the first character of word twice
var str1 = "Rohit Virat Vaibhav Abhishek Surya"
var output = " "
//output = "RRohit VVirat VVaibhav AAbhishek SSurya"
const word_array= str1.split(" ")
console.log(word_array)
for(var word of word_array){
    console.log(word)
    var first_word =word[0]
    var newWord = `${first_word}${word}`
        output = output+" "+newWord
    }
    console.log(output)

//Removing duplicate words

var str1 = "Rohit Virat Vaibhav Surya Rohit Abhishek Surya Virat"
var output = " "
const word_array= str1.split(" ")
//console.log(word_array)
for(var word of word_array){
    //console.log(word)
    var first_word =word[0]
    var newWord = `${first_word}${word}`
    if(output.includes(word)){
     continue
    }else{
        output = output+" "+word
    }
}
console.log(output)

//First and Last character of a word
var str1 = "Rohit Virat Vaibhav Abhishek Surya"
//output = Rt Vt Vv Ak Sa
var output = " "
var word_array=str1.split(" ")
console.log(word_array)
for(var word of word_array){
    var first_word = word[0]
    var last_word = word.slice(-1)
    var newWord = `${first_word}${last_word}`
    output = output+" "+newWord
}
console.log(output)


//Get First and Last characters of a given string.
// If the string length is less than 2, return an empty string.

var str1 = 'JavaScript'
if(str1.length<2){
    console.log("empty")
}else{
    var characters = (str1.slice(0,2)+str1.slice(-2))
    console.log(characters)
    
}
//Find the length of a longest string
var arr1 =["Java" , "Programming" , "Language"]
var long=arr1[0]
for(var i=1;i<arr1.length;i++){
    if(arr1[i].length>long.length){
        long =arr1[i]
    }
}console.log(long)

   //Repeat the Last Two Characters Four Times
   var str1 = "Coding"
   var output = str1.slice(-2)
    var result = "";
   for(var i=0; i<4 ;i++){
   result = result+output
   }
   console.log(result)

   //Reverse a String if Its Length is a Multiple of 4
   var str1 = "Code"
   var output = ""
   if((str1.length)%4==0)
   {
    for(var i=str1.length-1; i>=0 ; i--){
      output += str1[i]
    }
   }console.log(output)

   //Count Occurrences of a Substring
   var str1 = "banana";
   var str2 = "an"
   var count=0
   for(var chr of str1){

   if(str2.includes(chr))
   {
   count = count+1;
   }
   }
   console.log(count)
   
//Calculate String Length Without Using length Property
var str1 = "JavaScript"
var count = 0
for(var i=str1.length-1; i>=0; i--){
    count+=1
}
console.log(count)

/* //Swap the First and Last Character
var str1="JavaScript"
var first = str1.slice(0)//J
var last = str1.slice(-1)//t
var output=last+output1+first
console.log(output) */

//Check Whether a String is a Palindrome

var str1 = "madam"
   var output = ""
   for(var i=str1.length-1; i>=0 ; i--){
      output += str1[i]
   }
   if(str1==output)
    console.log("Palindrome")
    else
    console.log("Not a palindrome")

    //Combine Two Strings
    var str1="Hello"
    var str2="World"
    var output= str1+" "+str2
    console.log(output)

    //Count Total Consonants
  var str1="JavaScrIpt"
  var str2="aeiouAEIO"
  var count=0
  for(var val of str1)
  if(!str2.includes(val))
  {
    count++
  }
  console.log("Count of consonants:",count)

  //Print Characters at Even Positions
  var str1="JavaScript"
  var output=""
  var i=0
  for(i=0; i<=str1.length-1; i++){

    if(i%2==0){
        output+=str1[i]
    }
  }
  console.log(output)

  // //Print Characters at odd Positions
  var str1="abcdefg"
  var output=""
  var i=0
  for(i=0; i<=str1.length-1; i++){

    if(i%2!=0){
        output+=str1[i]
    }
  }
  console.log(output)
