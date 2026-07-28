


 //Duplicate words remove
 var str1="vaibhav surya abhishek surya vaibhav"
 var words=str1.split(" ")
 var output= " "
 for(var chr of words)
 {
    if(output.includes(chr))
        {continue

        }
        else{
            output +=chr+" "
        }
    }
 
console.log("output:",output)


//Get the First and lost 2 characters

var str="JavaScript"
var output=str.slice(0,2)+str.slice(-2)
console.log("output:",output)


//Find the length of longest string in an array
var str=["Java","Programming","Script"]
var longest=str[0]
for(var i=0;i<str.length;i++)
{
    if(str[i].length>longest.length)
    
    {    longest1=str[i]
        longest=str[i].length
        
    }
}
console.log("Longest string length:",longest)
console.log("Longest string length:",longest1)


//Repeat the last two characters four times
var str="Codingig"
var last=str.slice(-2)
var result=" "
for(var i=1;i<=4;i++)
{
    result=result+last
}
console.log("Lat two characters:",result)



//Reverse a string legth is multiply by 4
var str="codeinge"
if(str.length%4==0)
{
    console.log(str.split("").reverse().join(""))
}
else{
    console.log(str)
}


//Check wheather a character is a vowel or consonant

var ch="e"
if("aeiouAEIOU".includes(ch))
{
    console.log("Vowel")
}
else
{
    console.log("Consonant")
}


//Most frequently repeated character and count

var str="Programming"
var repeated=""
var maxcount=0
for(var i=0;i<str.length;i++)
{
   var count=str.split(str[i]).length-1
   if(count>maxcount)
   {
     maxcount=count
    repeated=str[i]
   }
   
}
console.log("Repeated character:",repeated)
console.log("Repeated character count:",maxcount)

