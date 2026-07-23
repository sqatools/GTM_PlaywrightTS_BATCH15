var array =[3,4,5,6,7,88,9]
var max=array[0]
var secondmax=array[0]

for(var i=1;i<array.length;i++)
{
    if(array[i]>max)
    {
      secondmax = max
      max=array[i]
    }
    if(array[i] >secondmax && array[i] !=max)
    {
        secondmax = array[i]
    }
}
console.log("max Number of Given array is :",max)
console.log("second max number of array",secondmax)