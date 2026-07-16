let arr =[1,2,3,4,5,6,7,8]

let max =arr[0]

for(let num of arr)
{
    if(num > max)
    {
        max=num
    }
}
console.log("max number of given array is : ",max)