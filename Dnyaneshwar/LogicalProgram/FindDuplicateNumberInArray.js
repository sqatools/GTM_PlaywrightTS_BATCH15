var array=[2,3,4,5,6,7,5,4]

for(var i=0;i<array.length;i++)
{
    for(var j=i+1;j<array.length;j++)
    {
        if(array[i]==array[j])
        {
            console.log("Duplicate number is array is : ",array[i])
        }
    }
}