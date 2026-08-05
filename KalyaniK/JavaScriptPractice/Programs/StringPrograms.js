//Q1:Remove duplicate characters form String
var Str1="Cricbuzz is not associated"
var output=""
for(var chr of Str1){
    if(output.includes(chr)){
        continue;
    }else{
        output+=chr
}
}
console.log("output:",output)

//Write  arpogram to count the number of vowels in the given string
var s2="We are learning JAvascript"
vowel="aeiouAEIOU"
var count=0
for(var chr of s2)
{
    if(vowel.includes(chr))
    {
        count=count+1;
    }
}
console.log(count)

//Q2:Write  aprogram to re[peat the first character of each word twice
var Str="Rohit Virat Vaibhav"
var result=Str.split(" ");
console.log(result)
for(var chr of result){
     var First=chr[0];
     console.log(First+chr)
}

//Write a program to get the last character of each word
var Str="Rohit Virat Vaibhav"
var result=Str.split(" ");
console.log(result)
for(var chr of result){
     var last=chr.length-1;
    console.log(`${chr[last]}${chr[0]}`)
}

//Write  aprogram to remove duplicat ewords form given string"
var Str="Virat Rohit Virat rohit Rama Rama"
var words_array=Str.split(" ");
Result=" "
console.log(words_array);
for(var word of words_array)
{
    if(Result.includes(word))
    {
        continue;

    }else{
        Result=Result+word+" ";
    }
}
console.log(Result);

//Write a JavaScript program to create a new string using the first 2 and last 2 characters of a given string. If the string length is less than 2, return an empty string.

//Input: "JavaScript"

//Expected Output: "Japt"
var input="JavaScript"
var len=input.length;
 
console.log(`${input[0]}${input[1]}${input[len-2]}${input[len-1]}`)

// Find the Length of the Longest String in an Array
inputarray=["Java", "Programming", "Code"]
Maxlength=0;
for (var i of inputarray)
{
    var len=i.length;
    if(len>Maxlength)
    {
        Maxlength=len;
    }
}
console.log(Maxlength);
 
//Description: Write a JavaScript program to create a string made of four copies of the last two characters.Programming

//Input: "Coding"

//Expected Output:ngngngng
var str="Coding"
len=str.length;
var result=" ";
for (var i=0;i<=3;i++)
{
    result=result+str[len-2]+str[len-1];
}
console.log(result);
console.log("****************************************")
//Reverse a strign only if its length is a mmultiple of 4
var str='Code'
l=str.length
revstr=" "
if(l%4==0)
{
    for (i=l-1;i>=0;i--)
    {
      revstr+=str[i]
    }
}
console.log(revstr);
console.log("****************************************")
//Count  occurences of a substring
//Input:
//String: "banana"
//Substring: "an"
//Expected Output:2

var str="banana"
substr="an"
count=0
for(var i=0;i<str.length;i++)
{
splitstr=str.slice(i,i+2)
//console.log(splitstr)
if(splitstr=="an"){
    count+=1
}
 
}
console.log(count)
console.log("****************************************")
// Check Whether a Character is a Vowel or Consonant
// Description: Determine whether a given alphabet is a vowel or consonant.Computer Science
// Input: "e"
// Expected Output:Vowel
var str='e'
vowels="aeiouAEIOU"
if(vowels.includes(str))
{
    console.log("VOWEL")
}
console.log("****************************************")
// Find the Longest and Shortest Word
// Description: Find the longest and shortest words in a sentence.

// Input:"I love learning JavaScript"
// Expected Output:

// Longest: JavaScript
// Shortest: I
 var str="I love learning JavaScript"
 splitstr=str.split(" ");
 Mlength=0
 Slength=1
 MWord=" "
 SWord=" "
 console.log(splitstr)
 for(var word of splitstr)
 { 
    if(word.length>Mlength)
    {
        Mlength=word.length;
        MWord=word;
    }

    if(word.length<=Slength)
    {
        Slength=word.length;
        SWord=word;
    }
 }
 console.log("Longest:",MWord);
 console.log("shortest:",SWord);
console.log("****************************************")
 //Calculate string length without using length funciton
 var str="JAVASCRIPT"
 count=0
 for(var i of str)
 {
    count+=1;
 }
 console.log(count)
console.log("****************************************")
//  8. Find the Most Frequently Repeated Character
// Description: Find the character with the highest frequency.Programming

// Input: "programming"

// Expected Output:

var str="programmingppp"
count=0
Maxcount=0
var MF=" "
for(var i=0;i<str.length;i++)
{
    count=0
    for(var j=0;j<str.length;j++){
        console.log(str[i],str[j])
        if(str[i]==str[j])
        {
            count+=1;
            
        }
      if(count>Maxcount)
      {
       Maxcount=count
       MF=str[i]
       count=0
      }
    }

    
}
console.log(MF,":",Maxcount)