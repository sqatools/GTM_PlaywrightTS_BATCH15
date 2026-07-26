var str="12346547854"

var result=""

for(var i=0;i<str.length;i++)
{
    if(!result.includes(str[i]))
    {
        result +=str[i]
    }
}
console.log(result)