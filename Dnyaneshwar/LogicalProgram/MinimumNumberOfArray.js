let arr = [5,6,7,8,3]

let min =arr[0]

for(let num of arr)
{
if(num < min)
{
    min =num
}
}
console.log("miminum number of array is : " , min )