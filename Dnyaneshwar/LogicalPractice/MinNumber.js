var array=[2,3,4,5,6,1]
var min=array[0]

for(var i=1;i<=array.length;i++)
{
    if(array[i] <min)
    {
        min=array[i]
    }
}
console.log("min number of given array is :",min)