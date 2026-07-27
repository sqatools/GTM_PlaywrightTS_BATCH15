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
 