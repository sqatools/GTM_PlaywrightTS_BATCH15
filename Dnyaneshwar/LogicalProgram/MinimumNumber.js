var array=[22,33,44,55,8,11,12]

var min = array[0]

for(var i=1;i<array.length;i++)
{

    if(array[i]<min)
    {
        min=array[i]
    }
}

console.log("nimimum number of array is : ",min)