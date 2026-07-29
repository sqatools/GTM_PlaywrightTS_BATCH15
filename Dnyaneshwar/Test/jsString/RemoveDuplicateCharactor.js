var str ="Cricbuzz is not associated"

var out =""

for(var ch of str)
{

    if(out.includes(ch))
    {
        continue
    }
    else{
        out +=ch
    }
}
console.log(out)