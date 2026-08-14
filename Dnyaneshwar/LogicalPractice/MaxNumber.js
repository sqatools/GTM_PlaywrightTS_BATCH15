var array=[4, 6, 7, 11, 13, 116, 25, 29]

var max= array[0]

for(var i=1;i<=array.length;i++)
{
    if(array[i]>max)
    {
        max=array[i]
    }
    
}
console.log("max number:",max)