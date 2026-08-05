var array=[22,33,44,55,77,55,99]

var max=array[0]
var secondmax=array[0]

for(var i=0;i<array.length;i++)
{

    if(array[i]>max)
    {
        secondmax =max
        max=array[i]
    }
    else if(array[i] > secondmax && array[i] !=max)
    {
        secondmax=array[i]
    }
}
console.log(secondmax)