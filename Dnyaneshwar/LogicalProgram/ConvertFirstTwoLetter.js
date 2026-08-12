var str="Dnyaneshwar Ramesh Dandale"

var word=str.split(" ")

var result =""

for(var i=0;i<word.length;i++)
{
    if(i<2)
    { 
        result=result+word[i][0]+" "
    }
    else{
        result=result+word[i]
    }
}
console.log(result)