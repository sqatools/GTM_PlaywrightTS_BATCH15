var array = ["Java", "Programming", "Code"]

var long=""

for(var i=0;i<array.length;i++)
{

    if(array[i].length > long.length)
    {
        long=array[i]
    }
}
console.log("long string is :",long)
console.log("long lenght is :",long.length)

