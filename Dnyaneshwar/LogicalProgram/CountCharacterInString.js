var str ="aabbbccccddddd"

var count ={}
var result=""

for(var ch of str)
{
    if(count[ch])
    {
        count[ch]++
    }
    else{
        count[ch]=1
    }
}

for(var ch in count)
{
    result=result+count[ch]+ch
}
console.log(result)