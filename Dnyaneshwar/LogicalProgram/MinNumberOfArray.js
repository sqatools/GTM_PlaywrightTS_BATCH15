var array=[4,5,6,7,2,88]

var min =array[0]

for(var i=1;i<array.length;i++)
{
    if(array[i]<min)
    {
        min=array[i]
    }
}
console.log("Min number of given array is ",min)