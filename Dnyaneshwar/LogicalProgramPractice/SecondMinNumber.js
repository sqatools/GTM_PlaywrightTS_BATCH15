var array=[9,90,3,4,5,6,1]
var min=array[0]

var secondmin=array[0]

for(var i=1;i<array.length;i++)
{
    if(array[i]<min)
    {
        secondmin=min
        min=array[i]
    }
    if(array[i]>min && array[i]<secondmin)
    {
        secondmin=array[i]
    }
}

console.log("second min number of given array is :",secondmin)