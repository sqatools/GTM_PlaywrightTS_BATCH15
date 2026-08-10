var array=[1,2,3,4,5,336,33,55,6]

var max=array[0]

for(var i=1;i<=array.length;i++)
{
    if(array[i]>max)
    {
        max=array[i]
    }
}
console.log("max number of given array is :",max)