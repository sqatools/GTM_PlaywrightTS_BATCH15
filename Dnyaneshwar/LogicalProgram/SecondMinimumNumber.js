var  array =[33,44,55,66,77,87,90]

var max=array[0]

var secondmin=array[0]

for(var i=1;i<array.length;i++)
{
    if(array[i]>max)
    {
        secondmin=max
        max=array[i]
    }
    else if(array[i] > secondmin && array[i]!=max)
    {
        secondmin=array[i]
    }
}
console.log("second minimum number is : ",secondmin)