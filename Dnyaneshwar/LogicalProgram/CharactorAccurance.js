var str="viraj dnyaneshwar dandale"

var count={}

for(var ch of str)
{
    if(count[ch]){
        count[ch]++
    }
    else{
        count[ch]=1

    }
}
console.log(count)