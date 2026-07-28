var str="i love java script programming"

var word= str.split(" ")

var long=word[0]
var short=word[0]

for(var i=1;i<word.length;i++){

    if(word[i].length > long.length)
    {
        long=word[i]
    }
if(word[i].length < short.length)
{
    short=word[i]
}
}

console.log("long word if : ",long)

console.log("short word is :",short)