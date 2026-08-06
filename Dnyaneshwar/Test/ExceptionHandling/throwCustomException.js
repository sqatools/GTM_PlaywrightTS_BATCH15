function getArraySum(array){

try{

    var sum =0

    for(var num of array)
    {
        sum+=num

        if(sum>=20)
        {
            throw new Error("sum can not be greater than 20")

        }
        else{
            continue
        }

    }

}
catch(error)
{
console.log("error name : ",error.name)
console.log("error message : ",error.message)
//console.log("error stack : ",error.stack)       
}

}
getArraySum([1,2,3,4,12])