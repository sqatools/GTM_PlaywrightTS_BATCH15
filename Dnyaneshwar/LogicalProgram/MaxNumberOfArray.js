var array=[22,33,44,55,66,777,88]

var max= array[0]

for(var i=1; i<array.length;i++)
{

    if(array[i]>max)
    {
        max=array[i]
    }
}

console.log("max number is : ",max)