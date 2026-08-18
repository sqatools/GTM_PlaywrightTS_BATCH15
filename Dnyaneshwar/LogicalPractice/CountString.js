var str="aabbbccccddddd"

var count={}

var reult=""

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
    reult=reult+count[ch]+ch+" "
}

console.log(reult)