var str="aabbb"

var count={}

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
console.log(count)

for(var ch in count)
{
    result = result +count[ch]+ch
}
console.log(result)