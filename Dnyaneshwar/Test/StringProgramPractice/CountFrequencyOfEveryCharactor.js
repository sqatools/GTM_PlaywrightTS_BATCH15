var str="dnyaneshwar"

var count ={}

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
console.log("count Frequency of Hello is :",count)