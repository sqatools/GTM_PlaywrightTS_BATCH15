var str="Rohit sharma is Good Cricketer in the world"

var word=str.split(" ")

var result=""

for(var i=0;i<word.length;i++)
{

    if(i<2)
    {
        result=result+word[i][0]+" "
    }
    else if(i>3 && i<6) 
    {
         result=result+word[i][0]+" "
    }
    else{
        result=result+word[i]+" "
    }
}
console.log(result)