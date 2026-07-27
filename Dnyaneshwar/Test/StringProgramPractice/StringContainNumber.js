var str="helloe java "

var hasnumber=false

for(var i=0;i<str.length;i++)
{

    if(str[i] > "0" && str[i] <= "9")
    {
        hasnumber=true
        break
    }
}

if(hasnumber){
    console.log("string has number")
}
else{
    console.log("string does not has number")
}