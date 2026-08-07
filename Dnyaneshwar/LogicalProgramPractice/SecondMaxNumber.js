var array=[2,3,4,5,6]
var max=array[0]
var secondmax=array[0]

for(var i=1;i<=array.length;i++)
{
    if(array[i]>max)
    {
        secondmax=max
        max=array[i]
    }
    if(array[i] > secondmax && array[i] !=max)
    {
        secondmax=array[i]
    }
}
console.log(secondmax)
console.log(max)