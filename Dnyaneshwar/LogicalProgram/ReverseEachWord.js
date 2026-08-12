var str="i love India"

var word=str.trim().split(" ")
var result=""

for(var i=word.length-1;i>=0;i--)
{
    result=result+word[i]+" "
}
console.log(result.trim(""))